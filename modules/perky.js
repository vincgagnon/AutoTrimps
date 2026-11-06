//Perky: Grimy's perk optimizer (https://grimy.github.io/perks), ported to run inside AutoTrimps at portal time.
//Original code by Grimy, released under the WTFPL (https://github.com/Grimy/grimy.github.io).
//The Perk class, perk table, and optimize() are kept as close to the original as possible so results match the website.
//
//How it's used: with Core > AutoAllocate set to "Perky (Grimy)", AutoPortal calls perkyAllocate() on the portal screen
//once the next challenge is selected. Inputs are filled exactly like the website's "paste your save" (read_save()),
//except the save is the live game. Target zone = your highest zone (HZE) unless the "Perky Target Zone" setting is > 0.
//The preset (stat weights) is picked from the zone like the website does, or from the next challenge (Scientist, C²).
//Helium universe only.

MODULES["perky"] = {};
MODULES["perky"].showDetails = false; //log every perk change
MODULES["perky"].lastResult = null;   //{zone, preset, heLeft, levels} from the last run, handy in the console

//Same weights as the website: [helium, attack, health]
MODULES["perky"].presets = {
    early:      ['5', '4', '3'],
    broken:     ['7', '3', '1'],
    mid:        ['16', '5', '1'],
    corruption: ['25', '7', '1'],
    magma:      ['35', '4', '3'],
    z280:       ['42', '6', '1'],
    z400:       ['88', '10', '1'],
    z450:       ['500', '50', '1'],
    scientist:  ['0', '1', '3'],
    carp:       ['0', '0', '0'],
    coord:      ['0', '40', '1'],
    trimp:      ['0', '99', '1'],
    metal:      ['0', '7', '1'],
    c2:         ['0', '7', '1']
};
//Website rule: the last normal preset whose first zone is below your HZE
MODULES["perky"].zonePresets = [[1, 'early'], [60, 'broken'], [100, 'mid'], [181, 'corruption'], [230, 'magma'], [280, 'z280'], [400, 'z400'], [450, 'z450']];

var Perky = (function () {
    var abs = Math.abs, ceil = Math.ceil, floor = Math.floor, log = Math.log, max = Math.max, min = Math.min, pow = Math.pow, sqrt = Math.sqrt;
    var jobless = false;

    function mastery(name) {
        return !!(game.talents[name] && game.talents[name].purchased);
    }

    function parse_suffixes(str) {
        str = String(str).replace(/\*.*|[^--9+a-z]/gi, '');
        var suffixes = 'KMBTQaQiSxSpOcNoDcUdDdTdQadQidSxdSpdOdNdVUvDvTvQavQivSxvSpvOvNvTg'.split(/(?=[A-Z])/);
        for (var i = suffixes.length; i > 0; --i)
            str = str.replace(new RegExp(suffixes[i - 1] + '$', 'i'), 'E' + (3 * i));
        return +str;
    }

    //--- Perk (verbatim from perks.ts) ---
    function Perk(base_cost, cost_increment, scaling, max_level, cost_exponent) {
        this.locked = true;
        this.level = 0;
        this.min_level = 0;
        this.cost = base_cost;
        this.gain = 0;
        this.bonus = 1;
        this.base_cost = base_cost;
        this.cost_increment = cost_increment;
        this.scaling = scaling;
        this.max_level = (max_level === undefined) ? Infinity : max_level;
        this.cost_exponent = (cost_exponent === undefined) ? 1.3 : cost_exponent;
    }
    Perk.prototype.levellable = function (he_left) {
        return !this.locked &&
            this.level < this.max_level &&
            this.cost * max(1, floor(this.level / 1e12)) <= he_left;
    };
    Perk.prototype.level_up = function (amount) {
        this.level += amount;
        this.bonus = this.scaling(this.level);
        if (this.cost_increment) {
            var spent = amount * (this.cost + this.cost_increment * (amount - 1) / 2);
            this.cost += amount * this.cost_increment;
            return spent;
        } else {
            var spent2 = this.cost;
            this.cost = ceil(this.level / 2 + this.base_cost * pow(this.cost_exponent, this.level));
            return spent2;
        }
    };
    Perk.prototype.log_ratio = function () {
        return this.cost_increment ? (this.scaling(1) - this.scaling(0)) / this.bonus
            : log(this.scaling(this.level + 1) / this.bonus);
    };

    //--- parse_perks (verbatim from perks.ts) ---
    function parse_perks(fixed, unlocks) {
        var add = function (x) { return function (level) { return 1 + x * 0.01 * level; }; };
        var mult = function (x) { return function (level) { return pow(1 + x * 0.01, level); }; };

        var perks = {
            Looting_II:     new Perk(100e3, 10e3, add(0.25)),
            Carpentry_II:   new Perk(100e3, 10e3, add(0.25)),
            Motivation_II:  new Perk(50e3,  1e3,  add(1)),
            Power_II:       new Perk(20e3,  500,  add(1)),
            Toughness_II:   new Perk(20e3,  500,  add(1)),
            Capable:        new Perk(1e8,   0,    function () { return 1; }, 10, 10),
            Cunning:        new Perk(1e11,  0,    add(25)),
            Curious:        new Perk(1e14,  0,    add(160)),
            Classy:         new Perk(1e17,  0,    mult(4.5678375), 75),
            Overkill:       new Perk(1e6,   0,    add(500),     30),
            Resourceful:    new Perk(50e3,  0,    mult(-5)),
            Coordinated:    new Perk(150e3, 0,    mult(-2)),
            Siphonology:    new Perk(100e3, 0,    function (l) { return pow(1 + l, 0.1); }, 3),
            Anticipation:   new Perk(1000,  0,    add(6),       10),
            Resilience:     new Perk(100,   0,    mult(10)),
            Meditation:     new Perk(75,    0,    add(1),       7),
            Relentlessness: new Perk(75,    0,    function (l) { return 1 + 0.05 * l * (1 + 0.3 * l); }, 10),
            Carpentry:      new Perk(25,    0,    mult(10)),
            Artisanistry:   new Perk(15,    0,    mult(-5)),
            Range:          new Perk(1,     0,    add(1),       10),
            Agility:        new Perk(4,     0,    mult(-5),     20),
            Bait:           new Perk(4,     0,    add(100)),
            Trumps:         new Perk(3,     0,    add(20)),
            Pheromones:     new Perk(3,     0,    add(10)),
            Packrat:        new Perk(3,     0,    add(20)),
            Motivation:     new Perk(2,     0,    add(5)),
            Power:          new Perk(1,     0,    add(5)),
            Toughness:      new Perk(1,     0,    add(5)),
            Looting:        new Perk(1,     0,    add(5))
        };

        if (unlocks == '*')
            unlocks = Object.keys(perks).join(',');
        if (!unlocks.match(/>/))
            unlocks = unlocks.replace(/(?=,|$)/g, '>0');

        var items = (unlocks + ',' + fixed).split(/,/).filter(function (x) { return x; });
        for (var k = 0; k < items.length; k++) {
            var item = items[k];
            var m = item.match(/(\S+) *([<=>])=?(.*)/);
            if (!m)
                throw 'Enter a list of perk levels, such as "power=42, toughness=51".';

            var tier2 = m[1].match(/2$|II$/i);
            var name = m[1].replace(/[ _]?(2|II)/i, '').replace(/^OK/i, 'O').replace(/^Looty/i, 'L');
            var regex = new RegExp('^' + name + '[a-z]*' + (tier2 ? '_II' : '') + '$', 'i');
            var matches = Object.keys(perks).filter(function (p) { return p.match(regex); });

            if (matches.length > 1)
                throw 'Ambiguous perk abbreviation: ' + m[1] + '.';
            if (matches.length < 1)
                throw 'Unknown perk: ' + m[1] + '.';

            var level = parse_suffixes(m[3]);
            if (!isFinite(level))
                throw 'Invalid number: ' + m[3] + '.';

            perks[matches[0]].locked = false;
            if (m[2] != '>')
                perks[matches[0]].max_level = level;
            if (m[2] != '<')
                perks[matches[0]].min_level = level;
        }

        return perks;
    }

    //--- update_dg (verbatim from perks.ts, returns the value instead of filling a field) ---
    function dg_housing(zone) {
        var max_zone = zone / 2 + 115;
        var eff = 500e6 + 50e6 * game.generatorUpgrades.Efficiency.upgrades;
        var capa = 3 + 0.4 * game.generatorUpgrades.Capacity.upgrades;
        var max_fuel = game.permanentGeneratorUpgrades.Storage.owned ? capa * 1.5 : capa;
        var supply = 230 + 2 * game.generatorUpgrades.Supply.upgrades;
        var overclock = game.generatorUpgrades.Overclocker.upgrades;
        overclock = overclock && (1 - 0.5 * pow(0.99, overclock - 1));
        var burn = game.permanentGeneratorUpgrades.Slowburn.owned ? 0.4 : 0.5;
        var cells = mastery('magmaFlow') ? 18 : 16;
        var accel = mastery('quickGen') ? 1.03 : 1.02;
        var hs2 = mastery('hyperspeed2') ? (game.global.highestLevelCleared + 1) / 2 : 0;
        var bs = 0.5 * mastery('blacksmith') + 0.25 * mastery('blacksmith2') + 0.15 * mastery('blacksmith3');
        bs *= game.global.highestLevelCleared + 1;
        var housing = 0;
        var fuel = 0;
        var time = 0;

        function tick(mult) {
            housing += mult * eff * sqrt(min(capa, fuel));
            fuel = max(0, fuel - burn);
        }

        for (var zone2 = 230; zone2 <= max_zone; ++zone2) {
            fuel += cells * (0.01 * min(zone2, supply) - 2.1);

            var tick_time = ceil(60 / pow(accel, floor((zone2 - 230) / 3)));
            time += zone2 > bs ? 28 : zone2 > hs2 ? 20 : 15;
            while (time >= tick_time) {
                time -= tick_time;
                tick(1);
            }

            while (fuel > max_fuel)
                tick(overclock);

            housing *= 1.009;
        }

        while (fuel >= burn)
            tick(1);

        return housing;
    }

    //--- optimize (verbatim from perks.ts) ---
    function optimize(params) {
        var total_he = params.total_he, zone = params.zone, fluffy = params.fluffy, perks = params.perks, weight = params.weight, mod = params.mod;
        var he_left = total_he;
        var Looting_II = perks.Looting_II, Carpentry_II = perks.Carpentry_II, Motivation_II = perks.Motivation_II, Power_II = perks.Power_II, Toughness_II = perks.Toughness_II,
            Capable = perks.Capable, Cunning = perks.Cunning, Curious = perks.Curious, Classy = perks.Classy,
            Overkill = perks.Overkill, Resourceful = perks.Resourceful, Coordinated = perks.Coordinated, Siphonology = perks.Siphonology, Anticipation = perks.Anticipation,
            Resilience = perks.Resilience, Meditation = perks.Meditation, Relentlessness = perks.Relentlessness, Carpentry = perks.Carpentry, Artisanistry = perks.Artisanistry,
            Range = perks.Range, Agility = perks.Agility, Bait = perks.Bait, Trumps = perks.Trumps, Pheromones = perks.Pheromones,
            Packrat = perks.Packrat, Motivation = perks.Motivation, Power = perks.Power, Toughness = perks.Toughness, Looting = perks.Looting;

        ['whip', 'magn', 'taunt', 'ven'].forEach(function (name) {
            mod[name] = pow(1.003, zone * 99 * 0.03 * mod[name]);
        });

        var books = pow(1.25, zone) * pow(zone > 100 ? 1.28 : 1.2, max(zone - 59, 0));
        var gigas = max(0, min(zone - 60, zone / 2 - 25, zone / 3 - 12, zone / 5, zone / 10 + 17, 39));
        var base_housing = pow(1.25, 5 + min(zone / 2, 30) + gigas);
        var mystic = zone >= 25 ? floor(min(zone / 5, 9 + zone / 25, 15)) : 0;
        var tacular = (20 + zone - zone % 5) / 100;
        var base_income = 600 * mod.whip * books;
        var base_helium = pow(zone - 19, 2);
        var max_tiers = zone / 5 + +((zone - 1) % 10 < 5);
        var exponents = {
            cost: pow(1.069, 0.85 * (zone < 60 ? 57 : 53)),
            attack: pow(1.19, 13),
            health: pow(1.19, 14),
            block: pow(1.19, 10)
        };
        var equip_cost = {
            attack: 211 * (weight.attack + weight.health) / weight.attack,
            health: 248 * (weight.attack + weight.health) / weight.health,
            block: 5 * (weight.attack + weight.health) / weight.health
        };

        function ticks() {
            return 1 + +(Agility.bonus > 0.9) + ceil(10 * Agility.bonus);
        }

        function moti() {
            return Motivation.bonus * Motivation_II.bonus * Meditation.bonus;
        }

        var looting = function () { return Looting.bonus * Looting_II.bonus; };

        function gem_income() {
            var drag = moti() * mod.whip;
            var loot = looting() * mod.magn * 0.75 * 0.8;
            var chronojest = mod.chronojest * drag * loot / 30;
            return drag + loot + chronojest;
        }

        var trimps = mod.tent_city ? function () {
            var carp = Carpentry.bonus * Carpentry_II.bonus;
            var territory = Trumps.bonus;
            return 10 * (mod.taunt + territory * (mod.taunt - 1) * 111) * carp;
        } : function () {
            var carp = Carpentry.bonus * Carpentry_II.bonus;
            var bonus = 3 + log(base_housing * gem_income() / Resourceful.bonus) / log(1.4);
            var territory = Trumps.bonus * zone;
            return 10 * (base_housing * bonus + territory) * carp * mod.taunt + mod.dg * carp;
        };

        function income(ignore_prod) {
            var storage = mod.storage * Resourceful.bonus / Packrat.bonus;
            var loot = looting() * mod.magn / ticks();
            var prod = ignore_prod ? 0 : moti() * mod.prod;
            var chronojest = mod.chronojest * 0.1 * prod * loot;
            return base_income * (prod + loot * mod.loot + chronojest) * (1 - storage) * trimps();
        }

        function equip(stat) {
            var cost = equip_cost[stat] * Artisanistry.bonus;
            var levels = 1.136;
            var tiers = log(1 + income() / cost) / log(exponents.cost);

            if (tiers > max_tiers + 0.45) {
                levels = log(1 + pow(exponents.cost, tiers - max_tiers) * 0.2) / log(1.2);
                tiers = max_tiers;
            }
            return levels * pow(exponents[stat], tiers);
        }

        function building(cost, exp) {
            cost *= 4 * Resourceful.bonus;
            return log(1 + income(true) * (exp - 1) / cost) / log(exp);
        }

        function magma() {
            return max(zone - 229, 0);
        }

        function breed() {
            var nurseries = building(2e6, 1.06) / (1 + 0.1 * min(magma(), 20));
            var potency = 0.0085 * (zone >= 60 ? 0.1 : 1) * pow(1.1, floor(zone / 5));
            return potency * pow(1.01, nurseries) * Pheromones.bonus * mod.ven;
        }

        var group_size = [];

        for (var coord = 0; coord <= log(1 + he_left / 500e3) / log(1.3); ++coord) {
            var ratio = 1 + 0.25 * pow(0.98, coord);
            var available_coords = zone - 1 + (magma() ? 100 : 0);
            var result = 1;
            for (var i = 0; i < available_coords; ++i)
                result = ceil(result * ratio);
            group_size[coord] = result;
        }

        function soldiers() {
            var ratio = 1 + 0.25 * Coordinated.bonus;
            var pop = (mod.soldiers || trimps()) / 3;
            if (mod.soldiers > 1)
                pop += 36000 * Bait.bonus;
            var unbought_coords = max(0, log(group_size[Coordinated.level] / pop) / log(ratio));
            return group_size[0] * pow(1.25, -unbought_coords);
        }

        function gators() {
            if (zone < 230 || mod.soldiers > 1 || jobless)
                return 0;

            var ooms = log(trimps() / group_size[Coordinated.level]) / log(10);
            return max(0, (ooms - 7 + floor((zone - 215) / 100)) / 3);
        }

        function attack() {
            var attack = (0.15 + equip('attack')) * pow(0.8, magma());
            attack *= Power.bonus * Power_II.bonus * Relentlessness.bonus;
            attack *= Siphonology.bonus * Range.bonus * Anticipation.bonus;
            attack *= fluffy.attack[Capable.level];
            attack *= mastery('amalg') ? pow(1.5, gators()) : 1 + 0.5 * gators();
            return soldiers() * attack;
        }

        function health() {
            var health = (0.6 + equip('health')) * pow(0.8, magma());
            health *= Toughness.bonus * Toughness_II.bonus * Resilience.bonus;

            var gyms = building(400, 1.185);
            var trainers = jobless ? 0 : (gyms * log(1.185) - log(1 + gyms)) / log(1.1) + 25 - mystic;
            var block = 0.04 * gyms * pow(1 + mystic / 100, gyms) * (1 + tacular * trainers);

            var attacks = 60;

            if (zone < 70 || jobless) {
                var timer = log(1 + soldiers() * breed() / Bait.bonus) / log(1 + breed());
                attacks = timer / ticks();
            }

            else {
                var fighting = min(group_size[Coordinated.level] / trimps(), 1 / 3);
                var target_speed = fighting > 1e-9 ?
                    (pow(0.5 / (0.5 - fighting), 0.1 / mod.breed_timer) - 1) * 10 :
                    fighting / mod.breed_timer;
                var geneticists = log(breed() / target_speed) / -log(0.98);
                health *= pow(1.01, geneticists);
                health *= pow(1.332, gators());
            }

            health /= attacks;
            if (zone < 60)
                block += equip('block');
            else
                block = min(block, 4 * health);

            return soldiers() * (block + health);
        }

        var xp = function () { return Cunning.bonus * Curious.bonus * Classy.bonus; };
        var agility = function () { return 1 / Agility.bonus; };
        var helium = function () { return base_helium * looting() + 45; };
        var overkill = function () { return Overkill.bonus; };

        var stats = { agility: agility, helium: helium, xp: xp, attack: attack, health: health, overkill: overkill, trimps: trimps, income: income };

        function score() {
            var result = 0;
            for (var i in weight) {
                if (!weight[i])
                    continue;
                var stat = stats[i]();
                if (!isFinite(stat))
                    throw Error(i + ' is ' + stat);
                result += weight[i] * log(stat);
            }

            return result;
        }

        function recompute_marginal_efficiencies() {
            var baseline = score();

            for (var name in perks) {
                var perk = perks[name];
                if (perk.cost_increment || !perk.levellable(he_left))
                    continue;
                perk.level_up(1);
                perk.gain = score() - baseline;
                perk.level_up(-1);
            }

            ['Looting', 'Carpentry', 'Motivation', 'Power', 'Toughness'].forEach(function (name) {
                perks[name + '_II'].gain = perks[name].gain * perks[name + '_II'].log_ratio() / perks[name].log_ratio();
            });
        }

        function solve_quadratic_equation(a, b, c) {
            var delta = b * b - 4 * a * c;
            return (-b + sqrt(delta)) / (2 * a);
        }

        function spend_he(perk, budget) {
            perk.gain /= perk.log_ratio();

            if (perk.cost_increment) {
                var ratio = (1 + perk.level) / (1000 + Looting_II.level + Carpentry_II.level + Motivation_II.level + Power_II.level + Toughness_II.level);
                budget *= 0.5 * pow(ratio, 2);
                var x = solve_quadratic_equation(perk.cost_increment / 2, perk.cost - perk.cost_increment / 2, -budget);
                he_left -= perk.level_up(floor(max(min(x, perk.max_level - perk.level), 1, perk.level / 1e12)));
            }
            else {
                budget = pow(budget, 0.5);
                do he_left -= perk.level_up(1);
                while (perk.cost < budget && perk.level < perk.max_level);
            }

            perk.gain *= perk.log_ratio();
        }

        mod.loot *= 20.8;
        weight.agility = (weight.helium + weight.attack) / 2;
        weight.overkill = 0.25 * weight.attack * (2 - pow(0.9, weight.helium / weight.attack));

        if (zone > 90 && mod.soldiers <= 1 && Bait.min_level == 0)
            Bait.max_level = 0;

        fluffy.attack = [];
        var potential = log(0.003 * fluffy.xp / pow(5, fluffy.prestige) + 1) / log(4);
        for (var cap = 0; cap <= 10; ++cap) {
            var level = min(floor(potential), cap);
            var progress = level == cap ? 0 : (pow(4, potential - level) - 1) / 3;
            fluffy.attack[cap] = 1 + pow(5, fluffy.prestige) * 0.1 * (level / 2 + progress) * (level + 1);
        }

        for (var name in perks) {
            var perk = perks[name];
            if (perk.cost_increment)
                he_left -= perk.level_up(perk.min_level);
            else while (perk.level < perk.min_level)
                he_left -= perk.level_up(1);
        }

        var cratio = 0.25;
        while (Capable.levellable(he_left * cratio)) {
            he_left -= Capable.level_up(1);
            cratio = Capable.level <= floor(potential) && zone > 300 && weight.xp > 0 ? 0.25 : 0.01;
        }

        if (zone <= 300 || potential >= Capable.level)
            weight.xp = 0;

        if (he_left < 0)
            throw (game.global.canRespecPerks) ?
                "You don't have enough Helium to afford your Fixed Perks." :
                "You don't have a respec available.";

        var sorted_perks = Object.keys(perks).map(function (name) { return perks[name]; }).filter(function (perk) { return perk.levellable(he_left); });
        var reference_he = he_left;

        for (var x = 0.999; x > 1e-12; x *= x) {
            var he_target = reference_he * x;
            recompute_marginal_efficiencies();
            sorted_perks.sort(function (a, b) { return b.gain / b.cost - a.gain / a.cost; });

            while (he_left > he_target && sorted_perks.length) {
                var best = sorted_perks.shift();
                if (!best.levellable(he_left))
                    continue;

                spend_he(best, he_left - he_target);

                var j = 0;
                while (sorted_perks[j] && sorted_perks[j].gain / sorted_perks[j].cost > best.gain / best.cost)
                    j++;
                sorted_perks.splice(j, 0, best);
            }
        }

        if (he_left + 1 < total_he / 1e12 && Toughness_II.level > 0) {
            --Toughness_II.level;
            he_left += Toughness_II.cost;
        }

        return [he_left, perks];
    }

    //--- Inputs: read_save() + parse_inputs() from perks.ts, reading the live game instead of a pasted save ---
    function choosePreset(zone, challenge, squared) {
        if (squared) {
            if (challenge == 'Trimp') return 'trimp';
            if (challenge == 'Coordinate') return 'coord';
            if (challenge == 'Trapper') return 'carp';
            if (challenge == 'Metal') return 'metal';
            return 'c2';
        }
        if (challenge == 'Scientist') return 'scientist';
        var preset = 'early';
        MODULES["perky"].zonePresets.forEach(function (p) { if (p[0] < zone) preset = p[1]; });
        return preset;
    }

    function targetZone() {
        var setting = getPageSetting('PerkyZone');
        return (setting > 0) ? setting : game.global.highestLevelCleared + 1;
    }

    function buildInputs(challenge, squared) {
        jobless = game.global.ShieldEquipped && game.global.ShieldEquipped.name == "Job";
        var zone = targetZone();
        var preset = choosePreset(zone, challenge, squared);
        var w = MODULES["perky"].presets[preset];

        //Helium: everything spendable on the portal screen (leftover + spent on perks + earned this run).
        //Mid-run respec from View Perks can't use this run's helium (the website's "respec" checkbox).
        var helium = game.global.heliumLeftover + (game.global.viewingUpgrades ? 0 : game.resources.helium.owned);
        for (var perk in game.portal)
            helium += (game.portal[perk].heliumSpent || 0);

        //Unlocked perks. Without a respec available, perks can only go up.
        var unlocks = Object.keys(game.portal).filter(function (perk) { return !game.portal[perk].locked && game.portal[perk].level !== undefined; });
        if (!game.global.canRespecPerks)
            unlocks = unlocks.map(function (perk) { return perk + '>' + (game.portal[perk].level || 0); });

        //Income
        var tt = mastery('turkimp2') ? 1 : mastery('turkimp') ? 0.4 : 0.25;
        var prod = 1 + tt;
        var loot = 1 + 0.333 * tt;
        var spires = min(floor((zone - 101) / 100), game.global.spiresCompleted);
        loot *= zone < 100 ? 0.7 : 1 + (mastery('stillRowing') ? 0.3 : 0.2) * spires;

        var chronojest = 27 * game.unlocks.imps.Jestimp + 15 * game.unlocks.imps.Chronoimp;
        var cache = zone < 60 ? 0 : zone < 85 ? 7 : zone < 160 ? 10 : zone < 185 ? 14 : 20;

        (game.global.StaffEquipped.mods || []).forEach(function (mod) {
            if (mod[0] === 'MinerSpeed')
                prod *= 1 + 0.01 * mod[1];
            else if (mod[0] === 'metalDrop')
                loot *= 1 + 0.01 * mod[1];
        });

        if (jobless)
            prod = 0;
        else
            chronojest += (mastery('mapLoot2') ? 5 : 4) * cache;

        var fixed = getPageSetting('PerkyFixed') || '';
        if (typeof fixed !== 'string' || fixed == 'undefined' || fixed == '-1') fixed = '';

        var result = {
            total_he: helium,
            zone: zone,
            perks: parse_perks(fixed, unlocks.join(',')),
            weight: {
                helium: +w[0],
                attack: +w[1],
                health: +w[2],
                xp: floor((+w[0] + +w[1] + +w[2]) / 5),
                trimps: 0,
                income: 0
            },
            fluffy: {
                xp: game.global.fluffyExp,
                prestige: game.global.fluffyPrestige
            },
            mod: {
                storage: 0.125,
                soldiers: 0,
                dg: dg_housing(zone),
                tent_city: false,
                whip: !!game.unlocks.imps.Whipimp,
                magn: !!game.unlocks.imps.Magnimp,
                taunt: !!game.unlocks.imps.Tauntimp,
                ven: !!game.unlocks.imps.Venimp,
                chronojest: chronojest,
                prod: prod,
                loot: loot,
                breed_timer: mastery('patience') ? 45 : 30
            }
        };

        //Preset tweaks from parse_inputs()
        if (preset == 'carp') {
            result.mod.prod = result.mod.loot = 0;
            result.weight.trimps = 1e6;
        }
        if (preset == 'metal')
            result.mod.prod = 0;
        if (preset == 'trimp')
            result.mod.soldiers = 1;
        if (preset == 'scientist')
            result.perks.Coordinated.max_level = 0;

        return { params: result, preset: preset };
    }

    function calculate(challenge, squared) {
        var inputs = buildInputs(challenge, squared);
        var out = optimize(inputs.params);
        var levels = {};
        for (var name in out[1]) {
            if (!out[1][name].locked) levels[name] = out[1][name].level;
        }
        MODULES["perky"].lastResult = { zone: inputs.params.zone, preset: inputs.preset, heLeft: out[0], levels: levels };
        return MODULES["perky"].lastResult;
    }

    //--- Apply on the portal screen, using the game's own buy functions ---
    function currentLevel(name) {
        return game.portal[name].level + (game.portal[name].levelTemp || 0);
    }

    function buyLevels(name, amount) {
        //Buy `amount` levels; if rounding leaves us a hair short, buy as many as we can afford
        var before = currentLevel(name);
        while (amount > 0) {
            game.global.buyAmt = amount;
            buyPortalUpgrade(name);
            if (currentLevel(name) > before) return currentLevel(name) - before;
            amount = floor(amount / 2);
        }
        return 0;
    }

    function apply(levels) {
        var needRespec = Object.keys(levels).some(function (name) { return levels[name] < currentLevel(name); });
        if (needRespec) {
            if (!game.global.canRespecPerks) {
                debug("Perky: some perks would need to go down but no respec is available. Only adding levels.", "perks");
            } else {
                respecPerks();
                clearPerks();
            }
        }
        var preBuyAmt = game.global.buyAmt;
        var changes = [];
        //Most expensive first so any rounding shortfall lands on cheap perks
        var order = Object.keys(levels).sort(function (a, b) { return (game.portal[b].priceBase || 0) - (game.portal[a].priceBase || 0); });
        order.forEach(function (name) {
            var delta = levels[name] - currentLevel(name);
            if (delta > 0) {
                var got = buyLevels(name, delta);
                if (MODULES["perky"].showDetails) debug("Perky: " + name + " +" + got + (got < delta ? " (wanted +" + delta + ")" : ""), "perks");
                if (got > 0) changes.push(name);
            }
        });
        game.global.buyAmt = preBuyAmt;
        numTab(1, true);
        cancelTooltip();
        return changes;
    }

    return { calculate: calculate, apply: apply, optimize: optimize, parse_perks: parse_perks, choosePreset: choosePreset, buildInputs: buildInputs, dg_housing: dg_housing };
})();

//Entry point used by AutoPortal (doPortal). Runs on the portal screen after the challenge is selected.
function perkyAllocate() {
    if (typeof portalUniverse !== 'undefined' && portalUniverse != 1) return false; //Perky only models the Helium universe
    var challenge = game.global.selectedChallenge || '';
    var squared = (typeof challengeSquaredMode !== 'undefined') && challengeSquaredMode;
    try {
        var result = Perky.calculate(challenge, squared);
        Perky.apply(result.levels);
        debug("Perky: allocated helium for Z" + result.zone + " (" + result.preset + " preset" + (challenge ? ", next run: " + challenge + (squared ? "²" : "") : "") + "), " + prettify(result.heLeft) + " helium left over.", "perks", "*star");
        return true;
    } catch (err) {
        debug("Perky: could not allocate perks - " + err, "perks", "*warning");
        return false;
    }
}

//Scientist challenges (Scientist I - V, Helium universe only)
//
//During every Scientist challenge you start with a fixed pool of science and can never earn more
//(no research, no Scientists) until The Block (Z11) is cleared. Buying the wrong upgrades early
//(Speed books, Trainers, random prestiges...) can make the challenge impossible, so while it is active
//every science-costing upgrade is checked against a per-level plan before AT is allowed to buy it.
//
//Plans follow the Trimps wiki strategy (https://trimps.fandom.com/wiki/Scientist_I):
//  Scientist I   (11500 sci): Battle, Bloodlust, Miners, 9 Coordinations, Mace II, Breastplate II  = 11431
//  Scientist II  ( 8000 sci): Battle, Bloodlust, Miners, 8 Coordinations, Breastplate II           =  7992
//  Scientist III ( 1500 sci): Battle, Bloodlust, Miners, 3 Coordinations                           =  1127
//  Scientist IV  (   70 sci): Battle, Miners                                                       =    70
//  Scientist V   ( 1500 sci): Battle, Bloodlust, Miners, 3 Coordinations                           =  1127
//
//Each entry is [upgrade name, target number purchased]. Order is priority: science is always kept in reserve
//for the higher-priority entries that are still pending, including Coordination books that have not dropped yet.
//You can tweak a plan from the browser console, e.g. MODULES.scientist.plans[1] = [['Battle', 1], ...]

MODULES["scientist"] = {};
MODULES["scientist"].plans = {
    1: [['Battle', 1], ['Bloodlust', 1], ['Miners', 1], ['Coordination', 9], ['Megamace', 1], ['Bestplate', 1]],
    2: [['Battle', 1], ['Bloodlust', 1], ['Miners', 1], ['Coordination', 8], ['Bestplate', 1]],
    3: [['Battle', 1], ['Bloodlust', 1], ['Miners', 1], ['Coordination', 3]],
    4: [['Battle', 1], ['Miners', 1]],
    5: [['Battle', 1], ['Bloodlust', 1], ['Miners', 1], ['Coordination', 3]]
};
MODULES["scientist"].announced = false;

function scientistRomanLevel(level) {
    return ['', 'I', 'II', 'III', 'IV', 'V'][level] || String(level);
}

//True when the Scientist strategy should drive upgrade purchases
function scientistStrategyActive() {
    return game.global.universe == 1 &&
        game.global.challengeActive == "Scientist" &&
        !game.global.runningChallengeSquared &&
        getPageSetting('AutoScientist') == true;
}

//Which Scientist level is being run right now (1-5). getScientistLevel() is the game's own function.
function scientistCurrentLevel() {
    if (typeof getScientistLevel === 'function') return getScientistLevel();
    return Math.min(5, (game.global.sLevel || 0) + 1);
}

function scientistCurrentPlan() {
    var plan = MODULES["scientist"].plans[scientistCurrentLevel()] || [];
    //AT's BetterAutoFight already handles fighting, so Bloodlust would be wasted science
    if (getPageSetting('BetterAutoFight')) plan = plan.filter(function (step) { return step[0] != 'Bloodlust'; });
    return plan;
}

//Science cost of an upgrade after `extraDone` more purchases (0 = the next one). Uses the game's own cost formula.
function scientistScienceCost(upgradeName, extraDone) {
    var upgrade = game.upgrades[upgradeName];
    if (!upgrade || !upgrade.cost || !upgrade.cost.resources) return 0;
    var cost = upgrade.cost.resources.science;
    if (typeof cost === 'undefined') return 0;
    if (typeof cost === 'function') cost = cost();
    if (Array.isArray(cost)) cost = resolvePow(cost, upgrade, extraDone || 0);
    return cost;
}

//Science still needed to finish one plan step
function scientistPendingCost(step) {
    var upgrade = game.upgrades[step[0]];
    if (!upgrade) return 0;
    var total = 0;
    for (var i = 0; upgrade.done + i < step[1]; i++) total += scientistScienceCost(step[0], i);
    return total;
}

//Is this upgrade part of the plan and not finished yet? (Used so equipment won't "wall" on prestiges we never buy.)
function scientistPlanned(upgradeName) {
    var plan = scientistCurrentPlan();
    for (var i = 0; i < plan.length; i++) {
        if (plan[i][0] == upgradeName) return game.upgrades[upgradeName].done < plan[i][1];
    }
    return false;
}

//Main gate: may AT buy this upgrade right now?
function scientistAllowUpgrade(upgradeName) {
    if (!scientistStrategyActive()) return true;
    var cost = scientistScienceCost(upgradeName, 0);
    if (cost <= 0) return true; //doesn't touch science, not our business

    var plan = scientistCurrentPlan();
    var reserve = 0;
    for (var i = 0; i < plan.length; i++) {
        if (plan[i][0] == upgradeName) {
            if (game.upgrades[upgradeName].done >= plan[i][1]) return false;
            return game.resources.science.owned - cost >= reserve;
        }
        reserve += scientistPendingCost(plan[i]);
    }
    return false; //not in the plan
}

//Called every loop: log the plan once per challenge run
function scientistStatus() {
    if (!scientistStrategyActive()) {
        MODULES["scientist"].announced = false;
        return;
    }
    if (MODULES["scientist"].announced) return;
    MODULES["scientist"].announced = true;
    var plan = scientistCurrentPlan();
    var parts = [];
    var total = 0;
    for (var i = 0; i < plan.length; i++) {
        parts.push(plan[i][0] + (plan[i][1] > 1 ? ' x' + plan[i][1] : ''));
        total += scientistPendingCost(plan[i]);
    }
    debug('Scientist ' + scientistRomanLevel(scientistCurrentLevel()) + ' detected. Science plan: ' + parts.join(', ') +
        ' (needs ' + prettify(total) + ', have ' + prettify(game.resources.science.owned) + '). Everything else that costs science is skipped.', "general", "*lab");
}

//AB

function getCurrentAB(effect) {

    if (effect == false) {
      return autoBattle.enemyLevel;
    }
    else {
        var poison = autoBattle.enemy.poisonResist;
        var bleed = autoBattle.enemy.bleedResist;
        var shock = autoBattle.enemy.shockResist;

        var lowestResist = Math.min(poison,bleed,shock);

        var outEffect = "";
        if (poison == lowestResist) {
            outEffect += "p";
        }
        if (bleed == lowestResist) {
            outEffect += "b";
        }
        if (shock == lowestResist) {
            outEffect += "s";
        }

        return outEffect;
    }
};

function checkPreset(presetSlot) {

    for (var item in autoBattle.items) {
        if (autoBattle.items[item].equipped && autoBattle.presets["p" + presetSlot].indexOf(item) == -1) {
            return false;
        }
    }
    return true;
}

function ABcheck() {

    var winning = autoBattle.sessionEnemiesKilled >= autoBattle.sessionTrimpsKilled;

    if (winning) return 0;

    if (getCurrentAB(true) == "pbs" && (checkPreset(1) || checkPreset(2) || checkPreset(3))) {
        if (checkPreset(1)) return 2;
        else if (checkPreset(2)) return 3;
        else if (checkPreset(3)) return 1;
    }
    else if (getCurrentAB(true) == "pb" && (checkPreset(1) || checkPreset(2))) {
        if (checkPreset(1)) return 2;
        else if (checkPreset(2)) return 1;
    }
    else if (getCurrentAB(true) == "ps" && (checkPreset(1) || checkPreset(3))) {
        if (checkPreset(1)) return 3;
        else if (checkPreset(3)) return 1;
    }
    else if (getCurrentAB(true) == "bs" && (checkPreset(2) || checkPreset(3))) {
        if (checkPreset(2)) return 3;
        else if (checkPreset(3)) return 2;
    }
    else if (getCurrentAB(true) == "p" && (checkPreset(2) || checkPreset(3))) {
        return 1;
    }
    else if (getCurrentAB(true) == "b" && (checkPreset(1) || checkPreset(3))) {
        return 2;
    }
    else if (getCurrentAB(true) == "s" && (checkPreset(1) || checkPreset(2))) {
        return 3;
    }
}

function ABswitch() {

    if (ABcheck() > 0) {
        if (ABcheck() == 1) autoBattle.loadPreset('p1');
        else if (ABcheck() == 2) autoBattle.loadPreset('p2');
        else if (ABcheck() == 3) autoBattle.loadPreset('p3');
    }
}

function ABdustsimple() {
    
    var equips = [];
    
    for (var item in autoBattle.items) {
        if (autoBattle.items[item].equipped) {
            equips.push([item, autoBattle.upgradeCost(item)]);
        }
    }

    equips.sort(function(a, b) {
        return a[1] - b[1]; 
    });

    if (autoBattle.dust >= equips[0][1]) autoBattle.upgrade(equips[0][0]);
}

function ABdustsimplenonhid() {
    
    var equips = [];
    
    for (var item in autoBattle.items) {
        if (!autoBattle.items[item].equipped && !autoBattle.items[item].hidden) {
            equips.push([item, autoBattle.upgradeCost(item)]);
        }
    }

    equips.sort(function(a, b) {
        return a[1] - b[1]; 
    });

    if (autoBattle.dust >= equips[0][1]) autoBattle.upgrade(equips[0][0]);
}

function ABfarmsave() {

    var equips = [];
    
    for (var item in autoBattle.items) {
        if (autoBattle.items[item].equipped) {
            equips.push(item);
        }
    }

    var dustps = parseInt(autoBattle.getDustPs());
 
    var bestdust = 0;
    if (autoBattle.sessionEnemiesKilled > 2 && autoBattle.sessionEnemiesKilled > autoBattle.sessionTrimpsKilled) bestdust = dustps;

    var string = [autoBattle.enemyLevel, bestdust, equips];

    if (getPageSetting('RABfarmstring') == "-1") {
        setPageSetting('RABfarmstring', string);
    }
    else if (autoBattle.sessionEnemiesKilled > 8 && autoBattle.sessionEnemiesKilled > autoBattle.sessionTrimpsKilled && bestdust > 0 && autoTrimpSettings.RABfarmstring.value[1] < bestdust) {
        setPageSetting('RABfarmstring', string);
    }
}

function ABfarmswitch() {

    if (autoBattle.enemyLevel != getPageSetting('RABfarmstring')[0]) {
        autoBattle.enemyLevel = getPageSetting('RABfarmstring')[0];
        autoBattle.resetCombat(true)
    }

    var match = false;

    for (var item in autoBattle.items) {
        if (autoBattle.items[item].equipped && getPageSetting('RABfarmstring')[2].indexOf(item) == -1) {
            match = true;
        }
    }

    if (match) {
        var preset = getPageSetting('RABfarmstring')[2];
        var plength = preset.length;
        if (plength > autoBattle.getMaxItems()) plength = autoBattle.getMaxItems();
        for (var item in autoBattle.items){
             autoBattle.items[item].equipped = false;
             if (autoBattle.settings.loadHide.enabled) autoBattle.items[item].hidden = (autoBattle.items[item].owned) ? true : false;
        }
        for (var x = 0; x < plength; x++){
            if (!autoBattle.items[preset[x]] || !autoBattle.items[preset[x]].owned) continue;
                autoBattle.items[preset[x]].equipped = true;
                autoBattle.items[preset[x]].hidden = false;
        }
        autoBattle.resetCombat(true);
    }
}

function ABlevelswitch(level) {
    if (autoBattle.enemyLevel != level) {
        autoBattle.enemyLevel = level;
        autoBattle.resetCombat(true);
    }
}

function ABsolver() {

    if (autoBattle.autoLevel) autoBattle.toggleAutoLevel();

    var max = autoBattle.maxEnemyLevel;
    var items = [];
    var level = [];
    var contract = '';

    //Solver

    switch(max) {

        case 1:

        ABlevelswitch(1);

        items = ['Sword','Armor','Fists_of_Goo','Battery_Stick'];
        level = [2,1,1,1];
        
	break;

        case 2:

        ABlevelswitch(2);

        items = ['Sword','Armor','Fists_of_Goo','Battery_Stick'];
        level = [3,2,1,2];
        
	break;

        case 3:

        if (autoBattle.bonuses.Extra_Limbs.level < 1) {
            items = ['Sword','Armor','Fists_of_Goo','Battery_Stick'];
            level = [4,2,2,2];
            for (var equip in autoBattle.items) {
                if (autoBattle.items[equip].level < level[items.indexOf(equip)]) {
                    ABlevelswitch(2);
                }
                if (autoBattle.items[equip].level >= level[items.indexOf(equip)]) {
                    if (autoBattle.bonuses.Extra_Limbs.level < 1) {
                        autoBattle.buyBonus('Extra_Limbs');
                    }
                }
            }
        }
        
        if (autoBattle.bonuses.Extra_Limbs.level >= 1) {
            items = ['Sword','Armor','Fists_of_Goo','Battery_Stick','Pants'];
            level = [4,3,2,2,4];
            var proceed = true;
            for (var equip in autoBattle.items) {
                if (autoBattle.items[equip].level < level[items.indexOf(equip)]) {
		    proceed = false;
		}
            }

            if (!proceed && autoBattle.enemyLevel != 2) {
                autoBattle.enemyLevel = 2;
                autoBattle.resetCombat(true);
            }

            if (proceed && autoBattle.enemyLevel != 3) {
                autoBattle.enemyLevel = 3;
                autoBattle.resetCombat(true);
            }
        }

	break;

        case 4:

        if (!autoBattle.items.Raincoat.owned) {
	    contract = 'Raincoat';
            items = ['Sword','Armor','Fists_of_Goo','Battery_Stick','Pants'];
            level = [4,3,2,2,4];
            ABlevelswitch(3);
	}

	if (autoBattle.items.Raincoat.owned) {
            items = ['Rusty_Dagger','Fists_of_Goo','Battery_Stick','Pants','Raincoat'];
            level = [3,2,3,4,3];
            ABlevelswitch(4);
	}

	break;

	case 5:

        ABlevelswitch(5);

        if (!autoBattle.items.Putrid_Pouch.owned) {
            items = ['Rusty_Dagger','Fists_of_Goo','Battery_Stick','Pants','Raincoat'];
            level = [3,3,3,4,3];
            var proceed = true;
            for (var equip in autoBattle.items) {
                if (autoBattle.items[equip].level < level[items.indexOf(equip)]) {
		    proceed = false;
		}
            }
	    if (proceed) {
		if (!autoBattle.items.Putrid_Pouch.owned) {
	            contract = 'Putrid_Pouch';
	        }
	    }
        }
	if (autoBattle.items.Putrid_Pouch.owned) {
            items = ['Rusty_Dagger','Fists_of_Goo','Battery_Stick','Raincoat','Putrid_Pouch'];
            level = [3,3,3,3,3];
            var proceed2 = true;
            for (var equip in autoBattle.items) {
                if (autoBattle.items[equip].level < level[items.indexOf(equip)]) {
		    proceed2 = false;
		}
            }
	    if (proceed2) {
		if (!autoBattle.items.Chemistry_Set.owned) {
	            contract = 'Chemistry_Set';
	        }
	    }
	}
	if (autoBattle.items.Chemistry_Set.owned) {
            items = ['Menacing_Mask','Fists_of_Goo','Battery_Stick','Putrid_Pouch','Chemistry_Set'];
            level = [4,3,3,3,2];
	}

	break;

        case 6:

        ABlevelswitch(6);

        if (!autoBattle.items.Labcoat.owned) {
            items = ['Menacing_Mask','Fists_of_Goo','Battery_Stick','Putrid_Pouch','Chemistry_Set'];
            level = [4,3,3,3,2];
            var proceed = true;
            for (var equip in autoBattle.items) {
                if (autoBattle.items[equip].level < level[items.indexOf(equip)]) {
		    proceed = false;
		}
            }
	    if (proceed) {
		if (!autoBattle.items.Labcoat.owned) {
	            contract = 'Labcoat';
	        }
	    }
        }
        if (autoBattle.items.Labcoat.owned) {
            items = ['Fists_of_Goo','Battery_Stick','Putrid_Pouch','Chemistry_Set','Labcoat'];
            level = [3,4,3,2,1];
	}

        break;
        
	case 7:

        items = ['Fists_of_Goo','Battery_Stick','Putrid_Pouch','Chemistry_Set','Labcoat'];
        level = [3,4,3,4,2];
        ABlevelswitch(7);

	break;

        case 8:

        ABlevelswitch(8);

        if (!autoBattle.items.Comfy_Boots.owned) {
            items = ['Fists_of_Goo','Battery_Stick','Putrid_Pouch','Chemistry_Set','Labcoat'];
            level = [4,5,3,4,2];
            var proceed = true;
            for (var equip in autoBattle.items) {
                if (autoBattle.items[equip].level < level[items.indexOf(equip)]) {
		    proceed = false;
		}
            }
	    if (proceed) {
		if (!autoBattle.items.Comfy_Boots.owned) {
	            contract = 'Comfy_Boots';
	        }
	    }
        }
        if (autoBattle.items.Comfy_Boots.owned) {
            items = ['Fists_of_Goo','Battery_Stick','Putrid_Pouch','Chemistry_Set','Labcoat'];
            level = [4,5,3,4,2];
	    if (autoBattle.items.Comfy_Boots.level < 3) {
                autoBattle.upgrade('Comfy_Boots');
	    }
	}

        break;

        case 9:
       
        if (!autoBattle.items.Comfy_Boots.owned) {
	    contract = 'Comfy_Boots';
	}

        if (autoBattle.items.Comfy_Boots.level < 3) {
            autoBattle.upgrade('Comfy_Boots');
        }

        if (autoBattle.items.Comfy_Boots.level >= 3 && autoBattle.bonuses.Extra_Limbs.level < 2) {
            ABlevelswitch(8);
            items = ['Fists_of_Goo','Battery_Stick','Putrid_Pouch','Chemistry_Set','Labcoat'];
            level = [4,5,3,4,2];
            autoBattle.buyBonus('Extra_Limbs');
        }
        
        if (autoBattle.bonuses.Extra_Limbs.level >= 2 && autoBattle.items.Rusty_Dagger.level < 5) {
            ABlevelswitch(8);
            items = ['Rusty_Dagger','Fists_of_Goo','Battery_Stick','Putrid_Pouch','Chemistry_Set','Labcoat'];
            level = [5,4,4,3,4,2];
        }

	if (autoBattle.items.Rusty_Dagger.level >= 5) {
	    ABlevelswitch(9);
            items = ['Rusty_Dagger','Fists_of_Goo','Raincoat','Putrid_Pouch','Chemistry_Set','Labcoat'];
            level = [5,4,4,3,4,2];
	}

	break;

        case 10:

        if (!autoBattle.items.Mood_Bracelet.owned) {
	    contract = 'Mood_Bracelet';
            items = ['Rusty_Dagger','Fists_of_Goo','Raincoat','Putrid_Pouch','Chemistry_Set','Labcoat'];
            level = [5,4,4,4,4,2];
            ABlevelswitch(9);
	}
	if (autoBattle.items.Mood_Bracelet.owned && !autoBattle.items.Lifegiving_Gem.owned) {
            contract = 'Lifegiving_Gem';
            items = ['Rusty_Dagger','Fists_of_Goo','Raincoat','Putrid_Pouch','Chemistry_Set','Labcoat'];
            level = [5,4,4,4,4,2];
            ABlevelswitch(9);
	}
        if (autoBattle.items.Lifegiving_Gem.owned && !autoBattle.items.Hungering_Mold.owned) {
	    contract = 'Hungering_Mold';
            items = ['Rusty_Dagger','Fists_of_Goo','Raincoat','Putrid_Pouch','Chemistry_Set','Labcoat'];
            level = [5,4,4,4,4,2];
            ABlevelswitch(10);
	}
        if (autoBattle.items.Hungering_Mold.owned && autoBattle.items.Hungering_Mold.level < 2) {
            items = ['Rusty_Dagger','Fists_of_Goo','Raincoat','Putrid_Pouch','Chemistry_Set','Labcoat'];
            level = [5,4,4,4,4,2];
            ABlevelswitch(10);
	    if (autoBattle.items.Putrid_Pouch.level < 4) {
                autoBattle.upgrade('Putrid_Pouch');
	    }
            else if (autoBattle.items.Mood_Bracelet.level < 3) {
                autoBattle.upgrade('Mood_Bracelet');
	    }
            else if (autoBattle.items.Hungering_Mold.level < 2) {
                autoBattle.upgrade('Hungering_Mold');
	    }
	}
	if (autoBattle.items.Hungering_Mold.level >= 2 && autoBattle.items.Mood_Bracelet.level >= 3 && autoBattle.items.Putrid_Pouch.level >= 4) {
	    contract = 'Bad_Medkit';
            items = ['Fists_of_Goo','Putrid_Pouch','Chemistry_Set','Labcoat','Mood_Bracelet','Hungering_Mold'];
            level = [4,4,4,2,3,2];
            ABlevelswitch(10);
            if (autoBattle.items.Bad_Medkit.level < 3) {
                autoBattle.upgrade('Bad_Medkit');
	    }
	}

	break;
    }

    //Equip items
    
    var needsEquipChange = false;

    for (var item of items) {
        if (autoBattle.items[item].equipped == false) { needsEquipChange = true;}
    }

    if (needsEquipChange) {
        for (var item in autoBattle.items) {
            autoBattle.items[item].equipped = false;
        };

        for (var item of items) {
	    if (autoBattle.items[item].owned) autoBattle.equip(item);
        }
    }

    //Level items
    
    for (var equip in autoBattle.items) {
        if (autoBattle.items[equip].level < level[items.indexOf(equip)]) {
            autoBattle.upgrade(equip);
        }
    }

    //Contract

    if (contract != '' && !autoBattle.items[contract].owned) {
	autoBattle.acceptContract(contract);
	if (autoBattle.activeContract == contract) {
	    if (game.global.world >= autoBattle.items[contract].zone) {
		contractVoid = true;
	    }
        }
    }
    
}

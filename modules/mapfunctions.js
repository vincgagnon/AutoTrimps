//### RAutoMap Global VarsRshouldDoMaps
var RshouldFarm = false;
var RdoVoids = false;
var RneedToVoid = false;
var RneedPrestige = false;
var RshouldDoMaps = false;
var RlastMapWeWereIn = null;
var RdoMaxMapBonus = false;
var RvanillaMAZ = false;
var contractVoid = false;
var RadditionalCritMulti = 2 < getPlayerCritChance() ? 25 : 5;

//### Quest
var Rshoulddoquest = false;
var Rquestequalityscale = false;
var Rquestshieldzone = 0;

//### Map Module Vars

//Frag Farm
var Rshouldfragfarm = false;

//Time Farm
var Rtimefarm = false;
var Rshouldtimefarm = false;

//dTime Farm
var Rdtimefarm = false;
var Rdshouldtimefarm = false;

//Smithy Farm
var Rsmithyfarm = false;
var Rshouldsmithyfarm = false;

//Tribute
var Rshouldtributefarm = false;

//Bog
var Rshoulddobogs = false;

//Frozen Castle
var Rshouldcastle = false;

//Praid
var Rshoulddopraid = false;
var RAMPpMap1 = undefined;
var RAMPpMap2 = undefined;
var RAMPpMap3 = undefined;
var RAMPpMap4 = undefined;
var RAMPpMap5 = undefined;
var RAMPfragmappy = undefined;
var RAMPrepMap1 = undefined;
var RAMPrepMap2 = undefined;
var RAMPrepMap3 = undefined;
var RAMPrepMap4 = undefined;
var RAMPrepMap5 = undefined;
var RAMPprefragmappy = undefined;
var RAMPmapbought1 = false;
var RAMPmapbought2 = false;
var RAMPmapbought3 = false;
var RAMPmapbought4 = false;
var RAMPmapbought5 = false;
var RAMPfragmappybought = false;
var RAMPdone = false;
var RAMPfragfarming = false;

//dPraid
var Rdshoulddopraid = false;
var RdAMPpMap1 = undefined;
var RdAMPpMap2 = undefined;
var RdAMPpMap3 = undefined;
var RdAMPpMap4 = undefined;
var RdAMPpMap5 = undefined;
var RdAMPfragmappy = undefined;
var RdAMPrepMap1 = undefined;
var RdAMPrepMap2 = undefined;
var RdAMPrepMap3 = undefined;
var RdAMPrepMap4 = undefined;
var RdAMPrepMap5 = undefined;
var RdAMPprefragmappy = undefined;
var RdAMPmapbought1 = false;
var RdAMPmapbought2 = false;
var RdAMPmapbought3 = false;
var RdAMPmapbought4 = false;
var RdAMPmapbought5 = false;
var RdAMPfragmappybought = false;
var RdAMPdone = false;
var RdAMPfragfarming = false;

//Mayhem
var Rshouldmayhem = 0;
var Rmayhemextraglobal = -1;

//Panda
var Rshouldpanda = 0;
var Rpandaextraglobal = 1;

//Insanity
var Rinsanityfarm = false;
var Rshouldinsanityfarm = false;
var Rinsanityfragfarming = false;
var insanityfragmappy = undefined;
var insanityprefragmappy = undefined;
var insanityfragmappybought = false;

//Storm
var Rstormfarm = false;
var Rshouldstormfarm = false;

//Desolation
var Rdesofarm = false;
var Rshoulddesofarm = false;
var Rdesoextraglobal = 1;

//Equip Farm
var Requipfarm = false;
var Rshouldequipfarm = false;
var Requipminusglobal = -1;

//Ships
var Rshipfarm = false;
var Rshouldshipfarm = false;
var Rshipfragfarming = false;
var shipfragmappy = undefined;
var shipprefragmappy = undefined;
var shipfragmappybought = false;

//Alch
var Ralchfarm = false;
var Rshouldalchfarm = false;
var Rshouldhypofarm = false;
var Ralchfragfarming = false;
var alchfragmappy = undefined;
var alchprefragmappy = undefined;
var alchfragmappybought = false;

//Hypo
var Rhypofarm = false;
var Rhyposhouldwood = true;
var Rshouldhypofarm = false;
var Rhypofragfarming = false;
var hypofragmappy = undefined;
var hypoprefragmappy = undefined;
var hypofragmappybought = false;

function RresetVars() {
    RshouldFarm = false;
    RdoVoids = false;
    RneedToVoid = false;
    RneedPrestige = false;
    RshouldDoMaps = false;
    RlastMapWeWereIn = null;
    RdoMaxMapBonus = false;
    RvanillaMAZ = false;
    contractVoid = false;
    RadditionalCritMulti = 2 < getPlayerCritChance() ? 25 : 5;

    //### Quest
    Rshoulddoquest = false;
    Rquestequalityscale = false;
    Rquestshieldzone = 0;

    //### Map Modules

    //Frag Farm
    Rshouldfragfarm = false;

    //Time Farm
    Rtimefarm = false;
    Rshouldtimefarm = false;

    //dTime Farm
    Rdtimefarm = false;
    Rdshouldtimefarm = false;

    //Smithy Farm
    Rsmithyfarm = false;
    Rshouldsmithyfarm = false;

    //Tribute
    Rshouldtributefarm = false;

    //Bog
    Rshoulddobogs = false;

    //Frozen Castle
    Rshouldcastle = false;

    //Praid
    Rshoulddopraid = false;
    RAMPpMap1 = undefined;
    RAMPpMap2 = undefined;
    RAMPpMap3 = undefined;
    RAMPpMap4 = undefined;
    RAMPpMap5 = undefined;
    RAMPfragmappy = undefined;
    RAMPrepMap1 = undefined;
    RAMPrepMap2 = undefined;
    RAMPrepMap3 = undefined;
    RAMPrepMap4 = undefined;
    RAMPrepMap5 = undefined;
    RAMPprefragmappy = undefined;
    RAMPmapbought1 = false;
    RAMPmapbought2 = false;
    RAMPmapbought3 = false;
    RAMPmapbought4 = false;
    RAMPmapbought5 = false;
    RAMPfragmappybought = false;
    RAMPdone = false;
    RAMPfragfarming = false;

    //dPraid
    Rdshoulddopraid = false;
    RdAMPpMap1 = undefined;
    RdAMPpMap2 = undefined;
    RdAMPpMap3 = undefined;
    RdAMPpMap4 = undefined;
    RdAMPpMap5 = undefined;
    RdAMPfragmappy = undefined;
    RdAMPrepMap1 = undefined;
    RdAMPrepMap2 = undefined;
    RdAMPrepMap3 = undefined;
    RdAMPrepMap4 = undefined;
    RdAMPrepMap5 = undefined;
    RdAMPprefragmappy = undefined;
    RdAMPmapbought1 = false;
    RdAMPmapbought2 = false;
    RdAMPmapbought3 = false;
    RdAMPmapbought4 = false;
    RdAMPmapbought5 = false;
    RdAMPfragmappybought = false;
    RdAMPdone = false;
    RdAMPfragfarming = false;

    //Mayhem
    Rshouldmayhem = 0;
    Rmayhemextraglobal = -1;

    //Panda
    Rshouldpanda = 0;
    Rpandaextraglobal = 1;

    //Insanity
    Rinsanityfarm = false;
    Rshouldinsanityfarm = false;
    Rinsanityfragfarming = false;
    insanityfragmappy = undefined;
    insanityprefragmappy = undefined;
    insanityfragmappybought = false;

    //Storm
    Rstormfarm = false;
    Rshouldstormfarm = false;
    
    //Desolation
    Rdesofarm = false;
    Rshoulddesofarm = false;
    Rdesoextraglobal = 1;

    //Equip Farm
    Requipfarm = false;
    Rshouldequipfarm = false;
    Requipminusglobal = -1;

    //Ships
    Rshipfarm = false;
    Rshouldshipfarm = false;
    Rshipfragfarming = false;
    shipfragmappy = undefined;
    shipprefragmappy = undefined;
    shipfragmappybought = false;

    //Alch
    Ralchfarm = false;
    Rshouldalchfarm = false;
    Rshouldhypofarm = false;
    Ralchfragfarming = false;
    alchfragmappy = undefined;
    alchprefragmappy = undefined;
    alchfragmappybought = false;

    //Hypo
    Rhypofarm = false;
    Rhyposhouldwood = true;
    Rshouldhypofarm = false;
    Rhypofragfarming = false;
    hypofragmappy = undefined;
    hypoprefragmappy = undefined;
    hypofragmappybought = false;
}

//###Other Functions - were in other.js but moved over

function RfragMap() {
    document.getElementById("biomeAdvMapsSelect").value = "Plentiful";
    document.getElementById("advExtraLevelSelect").value = 0;
    document.getElementById("advSpecialSelect").value = "fa";
    document.getElementById("lootAdvMapsRange").value = 9;
    document.getElementById("difficultyAdvMapsRange").value = 9;
    document.getElementById("sizeAdvMapsRange").value = 9;
    document.getElementById("advPerfectCheckbox").checked = true;
    document.getElementById("mapLevelInput").value = (game.global.world - 1);
    updateMapCost();

    if (updateMapCost(true) > game.resources.fragments.owned) {
        document.getElementById("biomeAdvMapsSelect").value = "Random";
        updateMapCost();
    }
    if (updateMapCost(true) > game.resources.fragments.owned) {
        document.getElementById("advPerfectCheckbox").checked = false;
        updateMapCost();
    }
    var fragsOwned = game.resources.fragments.owned;
    for (var i = 8; i >= 0; i--) {
        if (updateMapCost(true) > fragsOwned) {
          document.getElementById("difficultyAdvMapsRange").value = i;
        } else break;
        if (updateMapCost(true) > fragsOwned) {
          document.getElementById("sizeAdvMapsRange").value = i;
        } else break;
    }
    if (updateMapCost(true) > game.resources.fragments.owned) {
        document.getElementById("advSpecialSelect").value = "0";
        updateMapCost();
    }
}

function RfragCalc(frag) {
    if (frag > game.resources.fragments.owned) Rshouldfragfarm = true;
    else Rshouldfragfarm = false;
}

function RselectFrag() {
    var selectedMap = "create";
    if (Rshouldfragfarm) {
        for (var map in game.global.mapsOwnedArray) {
            if (!game.global.mapsOwnedArray[map].noRecycle && (game.global.world - 1) == game.global.mapsOwnedArray[map].level) {
                selectedMap = game.global.mapsOwnedArray[map].id;
                break;
            } else {
                selectedMap = "create";
            }
        }
    }
    return selectedMap;
}

function RminFragMap(selection, number, special) {

    document.getElementById("biomeAdvMapsSelect").value = selection;
    document.getElementById("advExtraLevelSelect").value = number;
    document.getElementById("advSpecialSelect").value = special;
    document.getElementById("lootAdvMapsRange").value = 9;
    document.getElementById("difficultyAdvMapsRange").value = 9;
    document.getElementById("sizeAdvMapsRange").value = 9;
    document.getElementById("advPerfectCheckbox").checked = true;
    document.getElementById("mapLevelInput").value = game.global.world;
    updateMapCost();

    if (updateMapCost(true) <= game.resources.fragments.owned) {
        return updateMapCost(true);
    }

    //Nobodys perfect
    if (updateMapCost(true) > game.resources.fragments.owned) {
        document.getElementById("advPerfectCheckbox").checked = false;
        updateMapCost();
        if (updateMapCost(true) <= game.resources.fragments.owned) {
            return updateMapCost(true);
        }
    }

    //Check minimum loot first
    for (var i = 8; i >= 0; i--) {
        if (updateMapCost(true) > game.resources.fragments.owned) {
            document.getElementById("lootAdvMapsRange").value = i;
            updateMapCost();
            if (updateMapCost(true) <= game.resources.fragments.owned) {
                return updateMapCost(true);
            }
        }
    }

    //Uh-oh ok lets try a bigger map
    for (var i = 8; i >= 0; i--) {
        if (updateMapCost(true) > game.resources.fragments.owned) {
            document.getElementById("sizeAdvMapsRange").value = i;
            updateMapCost();
            if (updateMapCost(true) <= game.resources.fragments.owned) {
                return updateMapCost(true);
            }
        }
    }

    //Bugger, looks like we're truly scraping the barrel now
    for (var i = 8; i >= 0; i--) {
        if (updateMapCost(true) > game.resources.fragments.owned) {
            document.getElementById("difficultyAdvMapsRange").value = i;
            updateMapCost();
            if (updateMapCost(true) <= game.resources.fragments.owned) {
                return updateMapCost(true);
            }
        }
    }

    //The bottom, you cannot afford lower than this so tough
    if (document.getElementById("difficultyAdvMapsRange").value == 0) {
        return updateMapCost(true);
    }
}

function RfragCheck(what) {
    var cost = 0;
    var frag = false;
    var farmzone = 0;
    var farmlevel = 0;
    var selection = "Farmlands";
    var special = "fa";

    if (what == "insanity") {
        frag = getPageSetting('Rinsanityfarmfrag');
        farmzone = getPageSetting('Rinsanityfarmzone');
        farmlevel = getPageSetting('Rinsanityfarmlevel');
        selection = "Plentiful";
    }
    else if (what == "ship") {
        frag = getPageSetting('Rshipfarmfrag');
        farmzone = getPageSetting('Rshipfarmzone');
        farmlevel = getPageSetting('Rshipfarmlevel');
        special = game.global.highestRadonLevelCleared > 83 ? "lsc" : "ssc";
        selection = game.global.farmlandsUnlocked ? "Farmlands" : "Plentiful";
    }
    else if (what == "alch") {
        frag = getPageSetting('Ralchfarmfrag');
        farmzone = getPageSetting('Ralchfarmzone');
        farmlevel = getPageSetting('Ralchfarmlevel');
    }
    else if (what == "hypo") {
        frag = getPageSetting('Rhypofarmfrag');
        farmzone = getPageSetting('Rhypofarmzone');
        farmlevel = getPageSetting('Rhypofarmlevel');
        sepcial = "lwc";
    }

    var farmlevelindex = farmzone.indexOf(game.global.world);
    var levelzones = farmlevel[farmlevelindex];

    if (what == "alch") {
        selection = getPageSetting('Ralchfarmselection')[farmlevelindex];
    }

    if (frag) cost = RminFragMap(selection, levelzones, special);

    if (game.resources.fragments.owned >= cost) return true;

    else return false;
}

function RAMPplusMapToRun(daily, number) {
    var map;
    var praidzone = daily ? getPageSetting('RdAMPraidzone') : getPageSetting('RAMPraidzone');
    var raidzone = daily ? getPageSetting('RdAMPraidraid') : getPageSetting('RAMPraidraid');

    var praidindex = praidzone.indexOf(game.global.world);
    var raidzones = raidzone[praidindex];

    map = (raidzones - game.global.world - number);

    return map;
}

function RAMPshouldrunmap(daily, number) {
    var go = false;
    var praidzone = daily ? getPageSetting('RdAMPraidzone') : getPageSetting('RAMPraidzone');
    var raidzone = daily ? getPageSetting('RdAMPraidraid') : getPageSetting('RAMPraidraid');

    var praidindex = praidzone.indexOf(game.global.world);
    var raidzones = raidzone[praidindex];

    var actualraidzone = (raidzones - number);

    if (Rgetequips(actualraidzone, false) > 0) {
        go = true;
    }
    return go;
}

function RAMPplusPres(daily, number) {
    document.getElementById("biomeAdvMapsSelect").value = "Plentiful";
    document.getElementById("advExtraLevelSelect").value = daily ? RAMPplusMapToRun(true, number) : RAMPplusMapToRun(false, number);
    document.getElementById("advSpecialSelect").value = "p";
    document.getElementById("lootAdvMapsRange").value = 0;
    document.getElementById("difficultyAdvMapsRange").value = 9;
    document.getElementById("sizeAdvMapsRange").value = 9;
    document.getElementById("advPerfectCheckbox").checked = false;
    document.getElementById("mapLevelInput").value = game.global.world;
    updateMapCost();

    if (updateMapCost(true) > game.resources.fragments.owned) {
        document.getElementById("biomeAdvMapsSelect").value = "Random";
        updateMapCost();
    }
    if (updateMapCost(true) > game.resources.fragments.owned) {
        document.getElementById("difficultyAdvMapsRange").value = 8;
        updateMapCost();
    }
    if (updateMapCost(true) > game.resources.fragments.owned) {
        document.getElementById("sizeAdvMapsRange").value = 8;
        updateMapCost();
    }
    if (updateMapCost(true) > game.resources.fragments.owned) {
        document.getElementById("difficultyAdvMapsRange").value = 7;
        updateMapCost();
    }
    if (updateMapCost(true) > game.resources.fragments.owned) {
        document.getElementById("sizeAdvMapsRange").value = 7;
        updateMapCost();
    }
    if (updateMapCost(true) > game.resources.fragments.owned) {
        document.getElementById("difficultyAdvMapsRange").value = 6;
        updateMapCost();
    }
    if (updateMapCost(true) > game.resources.fragments.owned) {
        document.getElementById("sizeAdvMapsRange").value = 6;
        updateMapCost();
    }
    if (updateMapCost(true) > game.resources.fragments.owned) {
        document.getElementById("difficultyAdvMapsRange").value = 5;
        updateMapCost();
    }
    if (updateMapCost(true) > game.resources.fragments.owned) {
        document.getElementById("sizeAdvMapsRange").value = 5;
        updateMapCost();
    }
    if (updateMapCost(true) > game.resources.fragments.owned) {
        document.getElementById("difficultyAdvMapsRange").value = 4;
        updateMapCost();
    }
    if (updateMapCost(true) > game.resources.fragments.owned) {
        document.getElementById("sizeAdvMapsRange").value = 4;
        updateMapCost();
    }
    if (updateMapCost(true) > game.resources.fragments.owned) {
        document.getElementById("difficultyAdvMapsRange").value = 3;
        updateMapCost();
    }
    if (updateMapCost(true) > game.resources.fragments.owned) {
        document.getElementById("sizeAdvMapsRange").value = 3;
        updateMapCost();
    }
    if (updateMapCost(true) > game.resources.fragments.owned) {
        document.getElementById("difficultyAdvMapsRange").value = 2;
        updateMapCost();
    }
    if (updateMapCost(true) > game.resources.fragments.owned) {
        document.getElementById("sizeAdvMapsRange").value = 2;
        updateMapCost();
    }
    if (updateMapCost(true) > game.resources.fragments.owned) {
        document.getElementById("difficultyAdvMapsRange").value = 1;
        updateMapCost();
    }
    if (updateMapCost(true) > game.resources.fragments.owned) {
        document.getElementById("sizeAdvMapsRange").value = 1;
        updateMapCost();
    }
    if (updateMapCost(true) > game.resources.fragments.owned) {
        document.getElementById("difficultyAdvMapsRange").value = 0;
        updateMapCost();
    }
    if (updateMapCost(true) > game.resources.fragments.owned) {
        document.getElementById("sizeAdvMapsRange").value = 0;
        updateMapCost();
    }
    if (updateMapCost(true) > game.resources.fragments.owned) {
        document.getElementById("advSpecialSelect").value = "fa";
        updateMapCost();
    }
    if (updateMapCost(true) > game.resources.fragments.owned) {
        document.getElementById("advSpecialSelect").value = "0";
        updateMapCost();
    }
}

function RAMPplusPresfragmax(daily, number) {
    document.getElementById("biomeAdvMapsSelect").value = "Plentiful";
    document.getElementById("advExtraLevelSelect").value = daily ? RAMPplusMapToRun(true, number) : RAMPplusMapToRun(false, number);
    document.getElementById("advSpecialSelect").value = "p";
    document.getElementById("lootAdvMapsRange").value = 0;
    document.getElementById("difficultyAdvMapsRange").value = 9;
    document.getElementById("sizeAdvMapsRange").value = 9;
    document.getElementById("advPerfectCheckbox").checked = false;
    document.getElementById("mapLevelInput").value = game.global.world;
    updateMapCost();
    return updateMapCost(true);
}

function RAMPplusPresfragmin(daily, number) {
    document.getElementById("biomeAdvMapsSelect").value = "Plentiful";
    document.getElementById("advExtraLevelSelect").value = daily ? RAMPplusMapToRun(true, number) : RAMPplusMapToRun(false, number);
    document.getElementById("advSpecialSelect").value = "p";
    document.getElementById("lootAdvMapsRange").value = 0;
    document.getElementById("difficultyAdvMapsRange").value = 9;
    document.getElementById("sizeAdvMapsRange").value = 9;
    document.getElementById("advPerfectCheckbox").checked = false;
    document.getElementById("mapLevelInput").value = game.global.world;
    updateMapCost();
    if (updateMapCost(true) <= game.resources.fragments.owned) {
        return updateMapCost(true);
    }
    if (updateMapCost(true) > game.resources.fragments.owned) {
        document.getElementById("biomeAdvMapsSelect").value = "Random";
        updateMapCost();
        if (updateMapCost(true) <= game.resources.fragments.owned) {
            return updateMapCost(true);
        }
    }
    if (updateMapCost(true) > game.resources.fragments.owned) {
        document.getElementById("difficultyAdvMapsRange").value = 8;
        updateMapCost();
        if (updateMapCost(true) <= game.resources.fragments.owned) {
            return updateMapCost(true);
        }
    }
    if (updateMapCost(true) > game.resources.fragments.owned) {
        document.getElementById("sizeAdvMapsRange").value = 8;
        updateMapCost();
        if (updateMapCost(true) <= game.resources.fragments.owned) {
            return updateMapCost(true);
        }
    }
    if (updateMapCost(true) > game.resources.fragments.owned) {
        document.getElementById("difficultyAdvMapsRange").value = 7;
        updateMapCost();
        if (updateMapCost(true) <= game.resources.fragments.owned) {
            return updateMapCost(true);
        }
    }
    if (updateMapCost(true) > game.resources.fragments.owned) {
        document.getElementById("sizeAdvMapsRange").value = 7;
        updateMapCost();
        if (updateMapCost(true) <= game.resources.fragments.owned) {
            return updateMapCost(true);
        }
    }
    if (updateMapCost(true) > game.resources.fragments.owned) {
        document.getElementById("difficultyAdvMapsRange").value = 6;
        updateMapCost();
        if (updateMapCost(true) <= game.resources.fragments.owned) {
            return updateMapCost(true);
        }
    }
    if (updateMapCost(true) > game.resources.fragments.owned) {
        document.getElementById("sizeAdvMapsRange").value = 6;
        updateMapCost();
        if (updateMapCost(true) <= game.resources.fragments.owned) {
            return updateMapCost(true);
        }
    }
    if (updateMapCost(true) > game.resources.fragments.owned) {
        document.getElementById("difficultyAdvMapsRange").value = 5;
        updateMapCost();
        if (updateMapCost(true) <= game.resources.fragments.owned) {
            return updateMapCost(true);
        }
    }
    if (updateMapCost(true) > game.resources.fragments.owned) {
        document.getElementById("sizeAdvMapsRange").value = 5;
        updateMapCost();
        if (updateMapCost(true) <= game.resources.fragments.owned) {
            return updateMapCost(true);
        }
    }
    if (updateMapCost(true) > game.resources.fragments.owned) {
        document.getElementById("difficultyAdvMapsRange").value = 4;
        updateMapCost();
        if (updateMapCost(true) <= game.resources.fragments.owned) {
            return updateMapCost(true);
        }
    }
    if (updateMapCost(true) > game.resources.fragments.owned) {
        document.getElementById("sizeAdvMapsRange").value = 4;
        updateMapCost();
        if (updateMapCost(true) <= game.resources.fragments.owned) {
            return updateMapCost(true);
        }
    }
    if (updateMapCost(true) > game.resources.fragments.owned) {
        document.getElementById("difficultyAdvMapsRange").value = 3;
        updateMapCost();
        if (updateMapCost(true) <= game.resources.fragments.owned) {
            return updateMapCost(true);
        }
    }
    if (updateMapCost(true) > game.resources.fragments.owned) {
        document.getElementById("sizeAdvMapsRange").value = 3;
        updateMapCost();
        if (updateMapCost(true) <= game.resources.fragments.owned) {
            return updateMapCost(true);
        }
    }
    if (updateMapCost(true) > game.resources.fragments.owned) {
        document.getElementById("difficultyAdvMapsRange").value = 2;
        updateMapCost();
        if (updateMapCost(true) <= game.resources.fragments.owned) {
            return updateMapCost(true);
        }
    }
    if (updateMapCost(true) > game.resources.fragments.owned) {
        document.getElementById("sizeAdvMapsRange").value = 2;
        updateMapCost();
        if (updateMapCost(true) <= game.resources.fragments.owned) {
            return updateMapCost(true);
        }
    }
    if (updateMapCost(true) > game.resources.fragments.owned) {
        document.getElementById("difficultyAdvMapsRange").value = 1;
        updateMapCost();
        if (updateMapCost(true) <= game.resources.fragments.owned) {
            return updateMapCost(true);
        }
    }
    if (updateMapCost(true) > game.resources.fragments.owned) {
        document.getElementById("sizeAdvMapsRange").value = 1;
        updateMapCost();
        if (updateMapCost(true) <= game.resources.fragments.owned) {
            return updateMapCost(true);
        }
    }
    if (updateMapCost(true) > game.resources.fragments.owned) {
        document.getElementById("difficultyAdvMapsRange").value = 0;
        updateMapCost();
        if (updateMapCost(true) <= game.resources.fragments.owned) {
            return updateMapCost(true);
        }
    }
    if (updateMapCost(true) > game.resources.fragments.owned) {
        document.getElementById("sizeAdvMapsRange").value = 0;
        updateMapCost();
        if (updateMapCost(true) <= game.resources.fragments.owned) {
            return updateMapCost(true);
        }
    }
    if (updateMapCost(true) > game.resources.fragments.owned) {
        document.getElementById("advSpecialSelect").value = "fa";
        updateMapCost();
        if (updateMapCost(true) <= game.resources.fragments.owned) {
            return updateMapCost(true);
        }
    }
    if (updateMapCost(true) > game.resources.fragments.owned) {
        document.getElementById("advSpecialSelect").value = "0";
        updateMapCost();
    }
    if (document.getElementById("advSpecialSelect").value == "0") {
        return updateMapCost(true);
    }
}

function RAMPfrag(daily) {
    var cost = 0;
    var praidzone = daily ? getPageSetting('RdAMPraidzone') : getPageSetting('RAMPraidzone');
    var raidzone = daily ? getPageSetting('RdAMPraidraid') : getPageSetting('RAMPraidraid');
    var frag = daily ? getPageSetting('RdAMPraidfrag') : getPageSetting('RAMPraidfrag');

    var praidindex = praidzone.indexOf(game.global.world);
    var raidzones = raidzone[praidindex];

    if (Rgetequips(raidzones, false)) {
        if (frag == 1) cost += (daily ? RAMPplusPresfragmin(true, 0) : RAMPplusPresfragmin(false, 0));
        else if (frag == 2) cost += (daily ? RAMPplusPresfragmax(true, 0) : RAMPplusPresfragmax(false, 0));
    }
    if (Rgetequips((raidzones - 1), false)) {
        if (frag == 1) cost += (daily ? RAMPplusPresfragmin(true, 1) : RAMPplusPresfragmin(false, 1));
        else if (frag == 2) cost += (daily ? RAMPplusPresfragmax(true, 1) : RAMPplusPresfragmax(false, 1));
    }
    if (Rgetequips((raidzones - 2), false)) {
        if (frag == 1) cost += (daily ? RAMPplusPresfragmin(true, 2) : RAMPplusPresfragmin(false, 2));
        else if (frag == 2) cost += (daily ? RAMPplusPresfragmax(true, 2) : RAMPplusPresfragmax(false, 2));
    }
    if (Rgetequips((raidzones - 3), false)) {
        if (frag == 1) cost += (daily ? RAMPplusPresfragmin(true, 3) : RAMPplusPresfragmin(false, 3));
        else if (frag == 2) cost += (daily ? RAMPplusPresfragmax(true, 3) : RAMPplusPresfragmax(false, 3));
    }
    if (Rgetequips((raidzones - 4), false)) {
        if (frag == 1) cost += (daily ? RAMPplusPresfragmin(true, 4) : RAMPplusPresfragmin(false, 4));
        else if (frag == 2) cost += (daily ? RAMPplusPresfragmax(true, 4) : RAMPplusPresfragmax(false, 4));
    }

    if (game.resources.fragments.owned >= cost) return true;
    else return false;
}

//###RAutoMap Functions

//Time Farm

function RtimeFarm(should, level, map, special, daily) {
    var timefarmzone = daily ? getPageSetting('Rdtimefarmzone') : getPageSetting('Rtimefarmzone');
    var timefarmindex = timefarmzone.indexOf(game.global.world);

    var timefarmlevel = daily ? getPageSetting('Rdtimefarmlevel')[timefarmindex] : getPageSetting('Rtimefarmlevel')[timefarmindex];
    if (level) return timefarmlevel;

    var timefarmmap = daily ? autoTrimpSettings.Rdtimefarmmap.value[timefarmindex] : autoTrimpSettings.Rtimefarmmap.value[timefarmindex];
    if (map) return timefarmmap;

    var timefarmspecial = daily ? autoTrimpSettings.Rdtimefarmspecial.value[timefarmindex] : autoTrimpSettings.Rtimefarmspecial.value[timefarmindex];
    if (special) return timefarmspecial;

    var timefarmcell = daily ? getPageSetting('Rdtimefarmcell')[timefarmindex] : getPageSetting('Rtimefarmcell')[timefarmindex];
    var timefarmtime = daily ? getPageSetting('Rdtimefarmtime') : getPageSetting('Rtimefarmtime');
    var time = ((new Date().getTime() - game.global.zoneStarted) / 1000 / 60);
    var timezones = timefarmtime[timefarmindex];

    if (should && timefarmzone.includes(game.global.world)) {
        if (game.global.lastClearedCell + 2 >= timefarmcell && timezones > time && timezones > 0) {
            if (daily) {
                Rdshouldtimefarm = true;
            } else Rshouldtimefarm = true;
        }
        if (!daily && game.global.challengeActive == 'Daily' && getPageSetting('Rdtimefarm') != 2) {
            Rshouldtimefarm = false;
        }
    }
}

function RtimeFarmMap(daily) {
    if (getPageSetting('Rtimefarmlevel') != 0 || (daily && getPageSetting('Rdtimefarmlevel') != 0)) {
        levelzones = daily ? RtimeFarm(false, true, false, false, true) : RtimeFarm(false, true, false, false, false);
        if (levelzones > 0) {
            document.getElementById("mapLevelInput").value = game.global.world;
            document.getElementById("advExtraLevelSelect").value = levelzones;
        } else if (levelzones < 0) {
            document.getElementById("mapLevelInput").value = (game.global.world + levelzones);
        }
    }

    biomeAdvMapsSelect.value = daily ? RtimeFarm(false, false, true, false, true) : RtimeFarm(false, false, true, false, false);
    document.getElementById("advSpecialSelect").value = daily ? RtimeFarm(false, false, false, true, true) : RtimeFarm(false, false, false, true, false);
    updateMapCost();
}

//Smithy Farm

function RsmithyFarm(amount) {
    var smithyfarmzone = getPageSetting('Rsmithyfarmzone');
    var smithyfarmindex = smithyfarmzone.indexOf(game.global.world);

    var smithyfarmcell = getPageSetting('Rsmithyfarmcell')[smithyfarmindex];
    var smithyfarmsmithy = getPageSetting('Rsmithyfarmamount');
    var smithys = game.buildings.Smithy.owned;
    var smithyzones = smithyfarmsmithy[smithyfarmindex];

    if (amount) return smithyzones;

    if (smithyfarmzone.includes(game.global.world)) {
        if (game.global.lastClearedCell + 2 >= smithyfarmcell && smithyzones > smithys && smithyzones > 0) {
            Rshouldsmithyfarm = true;
        }
    }
}

function RmapLevelCalc() {
    var HD = (RcalcHDratio() / 1.5);
    var level = 0;
    
    if (HD >= 10000) level = -3;
    if (HD >= 5000) level = -2;
    if (HD >= 500) level = -1;
    if (HD <= 40) level = 0;
    if (HD <= 1) level = 1;
    if (HD <= 0.5) level = 2;
    if (HD <= 0.1) level = 3;
    if (HD <= 0.05) level = 4;
    if (HD <= 0.01) level = 5;
    if (HD <= 0.005) level = 6;
    if (HD <= 0.0001) level = 7;
    if (HD <= 0.00005) level = 8;
    
    return level;
}

function RsmithyCalc(level, selection, special, gather) {
    var smithys = game.buildings.Smithy.owned;
    var goal = RsmithyFarm(true) - smithys;
    var afford = true;
    if (goal > 0) afford = canAffordBuilding("Smithy", false, false, false, false, goal);
    var smithywood, smithymetal, smithygems;

    if (!afford) {
        smithywood = game.resources.wood.owned - getBuildingItemPrice(game.buildings.Smithy, "wood", false, goal);
        smithymetal = game.resources.metal.owned - getBuildingItemPrice(game.buildings.Smithy, "metal", false, goal);
        smithygems = game.resources.gems.owned - getBuildingItemPrice(game.buildings.Smithy, "gems", false, goal);
    }

    if (level) return RmapLevelCalc();

    if (!afford && smithygems < 0) {
        if (selection) return "Depths";
        else if (special) return getHighestLevelCleared(true) > 65 ? "hc" : "lc";
        else if (gather) return "metal";
    }

    if (!afford && smithymetal < 0 && smithywood < 0) {
        if (selection) return game.global.farmlandsUnlocked ? "Farmlands" : "Plentiful";
        else if (special) return getHighestLevelCleared(true) > 65 ? "hc" : "lc";
        else if (gather) return "metal";
    }

    if (!afford && smithywood < 0) {
        if (selection) return game.global.farmlandsUnlocked ? "Farmlands" : "Plentiful";
        else if (special) return getHighestLevelCleared(true) > 85 ? "lwc" : "swc";
        else if (gather) return "wood";
    }

    if (!afford && smithymetal < 0) {
        if (selection) return game.global.farmlandsUnlocked ? "Farmlands" : "Plentiful";
        else if (special) return getHighestLevelCleared(true) > 85 ? "lmc" : "smc";
        else if (gather) return "metal";
    }
}

function RsmithyFarmMap() {
    var levelzones = RsmithyCalc(true, false, false, false);
    if (levelzones > 0) {
        document.getElementById("mapLevelInput").value = game.global.world;
        document.getElementById("advExtraLevelSelect").value = levelzones;
    } else if (levelzones < 0) {
        document.getElementById("mapLevelInput").value = (game.global.world + levelzones);
    }

    biomeAdvMapsSelect.value = RsmithyCalc(false, true, false, false);
    document.getElementById("advSpecialSelect").value = RsmithyCalc(false, false, true, false);
    updateMapCost();
    if (updateMapCost(true) > game.resources.fragments.owned) {
        RfragCalc(updateMapCost(true));
    }
}

//Tribute Farm

function RtributeFarm(should, level, map, special) {
    var tributefarmzone = getPageSetting('Rtributefarmzone');
    var tributefarmindex = tributefarmzone.indexOf(game.global.world);

    var tributefarmlevel = getPageSetting('Rtributefarmlevel')[tributefarmindex];
    if (level) return tributefarmlevel;

    var tributefarmmap = autoTrimpSettings.Rtributemapselection.value[tributefarmindex];
    if (map) return tributefarmmap;

    var tributefarmspecial = autoTrimpSettings.Rtributespecialselection.value[tributefarmindex];
    if (special) return tributefarmspecial;

    var tributefarmcell = getPageSetting('Rtributefarmcell')[tributefarmindex];
    var tributefarmtribute = getPageSetting('Rtributefarmamount');
    var tributes = game.buildings.Tribute.owned;
    var tributezones = tributefarmtribute[tributefarmindex];

    if (should && tributefarmzone.includes(game.global.world)) {
        if (game.global.lastClearedCell + 2 >= tributefarmcell && tributezones > tributes && tributezones > 0) {
            Rshouldtributefarm = true;
        }
    }
}

function RtributeFarmMap() {
    if (getPageSetting('Rtributefarmlevel') != 0) {
        levelzones = RtributeFarm(false, true, false, false);
        if (levelzones > 0) {
            document.getElementById("mapLevelInput").value = game.global.world;
            document.getElementById("advExtraLevelSelect").value = levelzones;
        } else if (levelzones < 0) {
            document.getElementById("mapLevelInput").value = (game.global.world + levelzones);
        }
    }

    biomeAdvMapsSelect.value = RtributeFarm(false, false, true, false);
    document.getElementById("advSpecialSelect").value = RtributeFarm(false, false, false, true);
    updateMapCost();
}

//Bogs

function Rbogs() {
    var bogzone = getPageSetting('Rblackbogzone');
    var bogamount = getPageSetting('Rblackbogamount');
    var bogindex = bogzone.indexOf(game.global.world);
    var stacks = 100;
    var stacksum = 0;

    for (var i = 0; i < (bogindex + 1); i++) {
        stacksum += parseInt(bogamount[i]);
    }

    var totalstacks = stacks - stacksum;

    if (bogzone.includes(game.global.world) && game.challenges.Quagmire.motivatedStacks > totalstacks) {
        Rshoulddobogs = true;
    }
}

//Praiding

function RPraid(daily) {
    var praidzone = daily ? getPageSetting('RdAMPraidzone') : getPageSetting('RAMPraidzone');
    var raidzone = daily ? getPageSetting('RdAMPraidraid') : getPageSetting('RAMPraidraid');

    var praidindex = praidzone.indexOf(game.global.world);
    var raidzones = raidzone[praidindex];

    var cell;
    cell = daily ? ((getPageSetting('RdAMPraidcell') != 0) ? getPageSetting('RdAMPraidcell')[praidindex] : 1) : ((getPageSetting('RAMPraidcell') != 0) ? getPageSetting('RAMPraidcell')[praidindex] : 1);

    if (praidzone.includes(game.global.world) && ((cell <= 1) || (cell > 1 && (game.global.lastClearedCell + 1) >= cell)) && Rgetequips(raidzones, false) > 0) {
        if (daily) {
            Rdshoulddopraid = true;
        } else Rshoulddopraid = true;
    }
}

function RAMPreset(daily) {

    if (!daily) {
        RAMPpMap1 = undefined;
        RAMPpMap2 = undefined;
        RAMPpMap3 = undefined;
        RAMPpMap4 = undefined;
        RAMPpMap5 = undefined;
        RAMPfragmappy = undefined;
        RAMPprefragmappy = undefined;
        RAMPmapbought1 = false;
        RAMPmapbought2 = false;
        RAMPmapbought3 = false;
        RAMPmapbought4 = false;
        RAMPmapbought5 = false;
        RAMPfragmappybought = false;
    } else {
        RdAMPpMap1 = undefined;
        RdAMPpMap2 = undefined;
        RdAMPpMap3 = undefined;
        RdAMPpMap4 = undefined;
        RdAMPpMap5 = undefined;
        RdAMPfragmappy = undefined;
        RdAMPprefragmappy = undefined;
        RdAMPmapbought1 = false;
        RdAMPmapbought2 = false;
        RdAMPmapbought3 = false;
        RdAMPmapbought4 = false;
        RdAMPmapbought5 = false;
        RdAMPfragmappybought = false;
    }

    var recycle = daily ? getPageSetting('RdAMPraidrecycle') : getPageSetting('RAMPraidrecycle');

    if (!daily) {

        if (RAMPrepMap1 != undefined) {
            if (recycle) {
                recycleMap(getMapIndex(RAMPrepMap1));
            }
            RAMPrepMap1 = undefined;
        }
        if (RAMPrepMap2 != undefined) {
            if (recycle) {
                recycleMap(getMapIndex(RAMPrepMap2));
            }
            RAMPrepMap2 = undefined;
        }
        if (RAMPrepMap3 != undefined) {
            if (recycle) {
                recycleMap(getMapIndex(RAMPrepMap3));
            }
            RAMPrepMap3 = undefined;
        }
        if (RAMPrepMap4 != undefined) {
            if (recycle) {
                recycleMap(getMapIndex(RAMPrepMap4));
            }
            RAMPrepMap4 = undefined;
        }
        if (RAMPrepMap5 != undefined) {
            if (recycle) {
                recycleMap(getMapIndex(RAMPrepMap5));
            }
            RAMPrepMap5 = undefined;
        }
    } else {

        if (RdAMPrepMap1 != undefined) {
            if (recyle) {
                recycleMap(getMapIndex(RdAMPrepMap1));
            }
            RdAMPrepMap1 = undefined;
        }
        if (RdAMPrepMap2 != undefined) {
            if (recyle) {
                recycleMap(getMapIndex(RdAMPrepMap2));
            }
            RdAMPrepMap2 = undefined;
        }
        if (RdAMPrepMap3 != undefined) {
            if (recyle) {
                recycleMap(getMapIndex(RdAMPrepMap3));
            }
            RdAMPrepMap3 = undefined;
        }
        if (RdAMPrepMap4 != undefined) {
            if (recyle) {
                recycleMap(getMapIndex(RdAMPrepMap4));
            }
            RdAMPrepMap4 = undefined;
        }
        if (RdAMPrepMap5 != undefined) {
            if (recyle) {
                recycleMap(getMapIndex(RdAMPrepMap5));
            }
            RdAMPrepMap5 = undefined;
        }
    }
}

function RAMP() {
    RAMPdone = false;
    var RAMPfragcheck = true;
    if (getPageSetting('RAMPraidfrag') > 0) {
        if (RAMPfrag(false) == true) {
            RAMPfragcheck = true;
            RAMPfragfarming = false;
        } else if (RAMPfrag(false) == false && !RAMPmapbought1 && !RAMPmapbought2 && !RAMPmapbought3 && !RAMPmapbought4 && !RAMPmapbought5 && Rshoulddopraid) {
            RAMPfragfarming = true;
            RAMPfragcheck = false;
            if (!RAMPfragcheck && RAMPfragmappy == undefined && !RAMPfragmappybought && game.global.preMapsActive && Rshoulddopraid) {
                debug("Check complete for frag map");
                RfragMap();
                if ((updateMapCost(true) <= game.resources.fragments.owned)) {
                    buyMap();
                    RAMPfragmappybought = true;
                    if (RAMPfragmappybought) {
                        RAMPfragmappy = game.global.mapsOwnedArray[game.global.mapsOwnedArray.length - 1].id;
                        debug("frag map bought");
                    }
                }
            }
            if (!RAMPfragcheck && game.global.preMapsActive && !game.global.mapsActive && RAMPfragmappybought && RAMPfragmappy != undefined && Rshoulddopraid) {
                debug("running frag map");
                selectedMap = RAMPfragmappy;
                selectMap(RAMPfragmappy);
                runMap();
                RlastMapWeWereIn = getCurrentMapObject();
                RAMPprefragmappy = RAMPfragmappy;
                RAMPfragmappy = undefined;
            }
            if (!RAMPfragcheck && game.global.mapsActive && RAMPfragmappybought && RAMPprefragmappy != undefined && Rshoulddopraid) {
                if (RAMPfrag(false) == false) {
                    if (!game.global.repeatMap) {
                        repeatClicked();
                    }
                } else if (RAMPfrag(false) == true) {
                    if (game.global.repeatMap) {
                        repeatClicked();
                        mapsClicked();
                    }
                    if (game.global.preMapsActive && RAMPfragmappybought && RAMPprefragmappy != undefined && Rshoulddopraid) {
                        RAMPfragmappybought = false;
                    }
                    if (RAMPprefragmappy != undefined) {
                        recycleMap(getMapIndex(RAMPprefragmappy));
                        RAMPprefragmappy = undefined;
                    }
                    RAMPfragcheck = true;
                    RAMPfragfarming = false;
                }
            }
        } else {
            RAMPfragcheck = true;
            RAMPfragfarming = false;
        }
    }
    if (RAMPfragcheck && RAMPpMap5 == undefined && !RAMPmapbought5 && game.global.preMapsActive && Rshoulddopraid && RAMPshouldrunmap(false, 0)) {
        debug("Check complete for 5th map");
        RAMPplusPres(false, 0);
        if ((updateMapCost(true) <= game.resources.fragments.owned)) {
            buyMap();
            RAMPmapbought5 = true;
            if (RAMPmapbought5) {
                RAMPpMap5 = game.global.mapsOwnedArray[game.global.mapsOwnedArray.length - 1].id;
                debug("5th map bought");
            }
        }
    }
    if (RAMPfragcheck && RAMPpMap4 == undefined && !RAMPmapbought4 && game.global.preMapsActive && Rshoulddopraid && RAMPshouldrunmap(false, 1)) {
        debug("Check complete for 4th map");
        RAMPplusPres(false, 1);
        if ((updateMapCost(true) <= game.resources.fragments.owned)) {
            buyMap();
            RAMPmapbought4 = true;
            if (RAMPmapbought4) {
                RAMPpMap4 = game.global.mapsOwnedArray[game.global.mapsOwnedArray.length - 1].id;
                debug("4th map bought");
            }
        }
    }
    if (RAMPfragcheck && RAMPpMap3 == undefined && !RAMPmapbought3 && game.global.preMapsActive && Rshoulddopraid && RAMPshouldrunmap(false, 2)) {
        debug("Check complete for 3rd map");
        RAMPplusPres(false, 2);
        if ((updateMapCost(true) <= game.resources.fragments.owned)) {
            buyMap();
            RAMPmapbought3 = true;
            if (RAMPmapbought3) {
                RAMPpMap3 = game.global.mapsOwnedArray[game.global.mapsOwnedArray.length - 1].id;
                debug("3rd map bought");
            }
        }
    }
    if (RAMPfragcheck && RAMPpMap2 == undefined && !RAMPmapbought2 && game.global.preMapsActive && Rshoulddopraid && RAMPshouldrunmap(false, 3)) {
        debug("Check complete for 2nd map");
        RAMPplusPres(false, 3);
        if ((updateMapCost(true) <= game.resources.fragments.owned)) {
            buyMap();
            RAMPmapbought2 = true;
            if (RAMPmapbought2) {
                RAMPpMap2 = game.global.mapsOwnedArray[game.global.mapsOwnedArray.length - 1].id;
                debug("2nd map bought");
            }
        }
    }
    if (RAMPfragcheck && RAMPpMap1 == undefined && !RAMPmapbought1 && game.global.preMapsActive && Rshoulddopraid && RAMPshouldrunmap(false, 4)) {
        debug("Check complete for 1st map");
        RAMPplusPres(false, 4);
        if ((updateMapCost(true) <= game.resources.fragments.owned)) {
            buyMap();
            RAMPmapbought1 = true;
            if (RAMPmapbought1) {
                RAMPpMap1 = game.global.mapsOwnedArray[game.global.mapsOwnedArray.length - 1].id;
                debug("1st map bought");
            }
        }
    }
    if (RAMPfragcheck && !RAMPmapbought1 && !RAMPmapbought2 && !RAMPmapbought3 && !RAMPmapbought4 && !RAMPmapbought5) {
        RAMPpMap1 = undefined;
        RAMPpMap2 = undefined;
        RAMPpMap3 = undefined;
        RAMPpMap4 = undefined;
        RAMPpMap5 = undefined;
        debug("Failed to Prestige Raid. Looks like you can't afford to or have no equips to get!");
        Rshoulddopraid = false;
        autoTrimpSettings["RAutoMaps"].value = 0;
    }
    if (RAMPfragcheck && game.global.preMapsActive && !game.global.mapsActive && RAMPmapbought1 && RAMPpMap1 != undefined && Rshoulddopraid) {
        debug("running map 1");
        selectedMap = RAMPpMap1;
        selectMap(RAMPpMap1);
        runMap();
        RlastMapWeWereIn = getCurrentMapObject();
        RAMPrepMap1 = RAMPpMap1;
        RAMPpMap1 = undefined;
    }
    if (RAMPfragcheck && game.global.preMapsActive && !game.global.mapsActive && RAMPmapbought2 && RAMPpMap2 != undefined && Rshoulddopraid) {
        debug("running map 2");
        selectedMap = RAMPpMap2;
        selectMap(RAMPpMap2);
        runMap();
        RlastMapWeWereIn = getCurrentMapObject();
        RAMPrepMap2 = RAMPpMap2;
        RAMPpMap2 = undefined;
    }
    if (RAMPfragcheck && game.global.preMapsActive && !game.global.mapsActive && RAMPmapbought3 && RAMPpMap3 != undefined && Rshoulddopraid) {
        debug("running map 3");
        selectedMap = RAMPpMap3;
        selectMap(RAMPpMap3);
        runMap();
        RlastMapWeWereIn = getCurrentMapObject();
        RAMPrepMap3 = RAMPpMap3;
        RAMPpMap3 = undefined;
    }
    if (RAMPfragcheck && game.global.preMapsActive && !game.global.mapsActive && RAMPmapbought4 && RAMPpMap4 != undefined && Rshoulddopraid) {
        debug("running map 4");
        selectedMap = RAMPpMap4;
        selectMap(RAMPpMap4);
        runMap();
        RlastMapWeWereIn = getCurrentMapObject();
        RAMPrepMap4 = RAMPpMap4;
        RAMPpMap4 = undefined;
    }
    if (RAMPfragcheck && game.global.preMapsActive && !game.global.mapsActive && RAMPmapbought5 && RAMPpMap5 != undefined && Rshoulddopraid) {
        debug("running map 5");
        selectedMap = RAMPpMap5;
        selectMap(RAMPpMap5);
        runMap();
        RlastMapWeWereIn = getCurrentMapObject();
        RAMPrepMap5 = RAMPpMap5;
        RAMPpMap5 = undefined;
    }
}

function dRAMP() {
    RdAMPdone = false;
    debug("dcreatep selected");
    var RdAMPfragcheck = true;
    if (getPageSetting('RdAMPraidfrag') > 0) {
        if (RAMPfrag(true) == true) {
            RdAMPfragcheck = true;
            RdAMPfragfarming = false;
        } else if (RAMPfrag(true) == false && !RdAMPmapbought1 && !RdAMPmapbought2 && !RdAMPmapbought3 && !RdAMPmapbought4 && !RdAMPmapbought5 && Rdshoulddopraid) {
            RdAMPfragfarming = true;
            RdAMPfragcheck = false;
            if (!RdAMPfragcheck && RdAMPfragmappy == undefined && !RdAMPfragmappybought && game.global.preMapsActive && Rdshoulddopraid) {
                debug("Check complete for frag map");
                RfragMap();
                if ((updateMapCost(true) <= game.resources.fragments.owned)) {
                    buyMap();
                    RdAMPfragmappybought = true;
                    if (RdAMPfragmappybought) {
                        RdAMPfragmappy = game.global.mapsOwnedArray[game.global.mapsOwnedArray.length - 1].id;
                        debug("frag map bought");
                    }
                }
            }
            if (!RdAMPfragcheck && game.global.preMapsActive && !game.global.mapsActive && RdAMPfragmappybought && RdAMPfragmappy != undefined && Rdshoulddopraid) {
                debug("running frag map");
                selectedMap = RdAMPfragmappy;
                selectMap(RdAMPfragmappy);
                runMap();
                RlastMapWeWereIn = getCurrentMapObject();
                RdAMPprefragmappy = RdAMPfragmappy;
                RdAMPfragmappy = undefined;
            }
            if (!RdAMPfragcheck && game.global.mapsActive && RdAMPfragmappybought && RdAMPprefragmappy != undefined && Rdshoulddopraid) {
                if (RAMPfrag(true) == false) {
                    if (!game.global.repeatMap) {
                        repeatClicked();
                    }
                } else if (RAMPfrag(true) == true) {
                    if (game.global.repeatMap) {
                        repeatClicked();
                        mapsClicked();
                    }
                    if (game.global.preMapsActive && RdAMPfragmappybought && RdAMPprefragmappy != undefined && Rdshoulddopraid) {
                        RdAMPfragmappybought = false;
                    }
                    if (RdAMPprefragmappy != undefined) {
                        recycleMap(getMapIndex(RdAMPprefragmappy));
                        RdAMPprefragmappy = undefined;
                    }
                    RdAMPfragcheck = true;
                    RdAMPfragfarming = false;
                }
            }
        } else {
            RdAMPfragcheck = true;
            RdAMPfragfarming = false;
        }
    }
    if (RdAMPfragcheck && RdAMPpMap5 == undefined && !RdAMPmapbought5 && game.global.preMapsActive && Rdshoulddopraid && RAMPshouldrunmap(true, 0)) {
        debug("Check complete for 5th map");
        RAMPplusPres(true, 0);
        if ((updateMapCost(true) <= game.resources.fragments.owned)) {
            buyMap();
            RdAMPmapbought5 = true;
            if (RdAMPmapbought5) {
                RdAMPpMap5 = game.global.mapsOwnedArray[game.global.mapsOwnedArray.length - 1].id;
                debug("5th map bought");
            }
        }
    }
    if (RdAMPfragcheck && RdAMPpMap4 == undefined && !RdAMPmapbought4 && game.global.preMapsActive && Rdshoulddopraid && RAMPshouldrunmap(true, 1)) {
        debug("Check complete for 4th map");
        RAMPplusPres(true, 1);
        if ((updateMapCost(true) <= game.resources.fragments.owned)) {
            buyMap();
            RdAMPmapbought4 = true;
            if (RdAMPmapbought4) {
                RdAMPpMap4 = game.global.mapsOwnedArray[game.global.mapsOwnedArray.length - 1].id;
                debug("4th map bought");
            }
        }
    }
    if (RdAMPfragcheck && RdAMPpMap3 == undefined && !RdAMPmapbought3 && game.global.preMapsActive && Rdshoulddopraid && RAMPshouldrunmap(true, 2)) {
        debug("Check complete for 3rd map");
        RAMPplusPres(true, 2);
        if ((updateMapCost(true) <= game.resources.fragments.owned)) {
            buyMap();
            RdAMPmapbought3 = true;
            if (RdAMPmapbought3) {
                RdAMPpMap3 = game.global.mapsOwnedArray[game.global.mapsOwnedArray.length - 1].id;
                debug("3rd map bought");
            }
        }
    }
    if (RdAMPfragcheck && RdAMPpMap2 == undefined && !RdAMPmapbought2 && game.global.preMapsActive && Rdshoulddopraid && RAMPshouldrunmap(true, 3)) {
        debug("Check complete for 2nd map");
        RAMPplusPres(true, 3);
        if ((updateMapCost(true) <= game.resources.fragments.owned)) {
            buyMap();
            RdAMPmapbought2 = true;
            if (RdAMPmapbought2) {
                RdAMPpMap2 = game.global.mapsOwnedArray[game.global.mapsOwnedArray.length - 1].id;
                debug("2nd map bought");
            }
        }
    }
    if (RdAMPfragcheck && RdAMPpMap1 == undefined && !RdAMPmapbought1 && game.global.preMapsActive && Rdshoulddopraid && RAMPshouldrunmap(true, 4)) {
        debug("Check complete for 1st map");
        RAMPplusPres(true, 4);
        if ((updateMapCost(true) <= game.resources.fragments.owned)) {
            buyMap();
            RdAMPmapbought1 = true;
            if (RdAMPmapbought1) {
                RdAMPpMap1 = game.global.mapsOwnedArray[game.global.mapsOwnedArray.length - 1].id;
                debug("1st map bought");
            }
        }
    }
    if (RdAMPfragcheck && !RdAMPmapbought1 && !RdAMPmapbought2 && !RdAMPmapbought3 && !RdAMPmapbought4 && !RdAMPmapbought5) {
        RdAMPpMap1 = undefined;
        RdAMPpMap2 = undefined;
        RdAMPpMap3 = undefined;
        RdAMPpMap4 = undefined;
        RdAMPpMap5 = undefined;
        debug("Failed to Prestige Raid. Looks like you can't afford to or have no equips to get!");
        Rdshoulddopraid = false;
        autoTrimpSettings["RAutoMaps"].value = 0;
    }
    if (RdAMPfragcheck && game.global.preMapsActive && !game.global.mapsActive && RdAMPmapbought1 && RdAMPpMap1 != undefined && Rdshoulddopraid) {
        debug("running map 1");
        selectedMap = RdAMPpMap1;
        selectMap(RdAMPpMap1);
        runMap();
        RlastMapWeWereIn = getCurrentMapObject();
        RdAMPrepMap1 = RdAMPpMap1;
        RdAMPpMap1 = undefined;
    }
    if (RdAMPfragcheck && game.global.preMapsActive && !game.global.mapsActive && RdAMPmapbought2 && RdAMPpMap2 != undefined && Rdshoulddopraid) {
        debug("running map 2");
        selectedMap = RdAMPpMap2;
        selectMap(RdAMPpMap2);
        runMap();
        RlastMapWeWereIn = getCurrentMapObject();
        RdAMPrepMap2 = RdAMPpMap2;
        RdAMPpMap2 = undefined;
    }
    if (RdAMPfragcheck && game.global.preMapsActive && !game.global.mapsActive && RdAMPmapbought3 && RdAMPpMap3 != undefined && Rdshoulddopraid) {
        debug("running map 3");
        selectedMap = RdAMPpMap3;
        selectMap(RdAMPpMap3);
        runMap();
        RlastMapWeWereIn = getCurrentMapObject();
        RdAMPrepMap3 = RdAMPpMap3;
        RdAMPpMap3 = undefined;
    }
    if (RdAMPfragcheck && game.global.preMapsActive && !game.global.mapsActive && RdAMPmapbought4 && RdAMPpMap4 != undefined && Rdshoulddopraid) {
        debug("running map 4");
        selectedMap = RdAMPpMap4;
        selectMap(RdAMPpMap4);
        runMap();
        RlastMapWeWereIn = getCurrentMapObject();
        RdAMPrepMap4 = RdAMPpMap4;
        RdAMPpMap4 = undefined;
    }
    if (RdAMPfragcheck && game.global.preMapsActive && !game.global.mapsActive && RdAMPmapbought5 && RdAMPpMap5 != undefined && Rdshoulddopraid) {
        debug("running map 5");
        selectedMap = RdAMPpMap5;
        selectMap(RdAMPpMap5);
        runMap();
        RlastMapWeWereIn = getCurrentMapObject();
        RdAMPrepMap5 = RdAMPpMap5;
        RdAMPpMap5 = undefined;
    }
}

//Mayhem

function Rmayhem() {
    var hits = (getPageSetting('Rmayhemacut') > 0) ? getPageSetting('Rmayhemabcut') : 100;
    var hitssurv = (getPageSetting('Rmayhemhcut') > 0) ? getPageSetting('Rmayhemhcut') : 1;
    var enemyDamage = RcalcBadGuyDmg(null, RgetEnemyMaxAttack(game.global.world, 50, 'Snimp', 1.0));
    if (game.challenges.Mayhem.stacks > 0 && getPageSetting('Rmayhemattack') == true && (RcalcHDratio() > hits)) {
        Rshouldmayhem = 1;
    }
    if (game.challenges.Mayhem.stacks > 0 && getPageSetting('Rmayhemhealth') == true && (RcalcOurHealth() < (hitssurv * enemyDamage))) {
        Rshouldmayhem = 2;
    }
}

function RmayhemExtra() {
    var mayhemextra = 0;
    if (Rshouldmayhem > 0 && getPageSetting('Rmayhemmap') == 2) {
        mayhemextra = 0;
        var health = (RcalcOurHealth() * 2);
        var attack = RcalcOurDmg("avg", false, true);
        var boss = game.challenges.Mayhem.getBossMult();
        var hitsmap = (getPageSetting('Rmayhemamcut') > 0) ? getPageSetting('Rmayhemamcut') : 100;
        var hitssurv = (getPageSetting('Rmayhemhcut') > 0) ? getPageSetting('Rmayhemhcut') : 1;
        var mlevels = 6;
        var go = false;
        if (
            (((RcalcEnemyHealth(game.global.world + mlevels) / boss)) <= (attack * (hitsmap * (mlevels + 1)))) &&
            ((((RcalcBadGuyDmg(null, RgetEnemyMaxAttack((game.global.world + mlevels), 20, 'Snimp', 1.0))) / boss * 1.3) * (hitssurv)) <= health)
        ) {
            mayhemextra = mlevels;
            go = true;
        }
        if (!go) {
            mlevels = 5;
            if (
                (((RcalcEnemyHealth(game.global.world + mlevels) / boss)) <= (attack * (hitsmap * (mlevels + 1)))) &&
                ((((RcalcBadGuyDmg(null, RgetEnemyMaxAttack((game.global.world + mlevels), 20, 'Snimp', 1.0))) / boss * 1.3) * (hitssurv)) <= health)
            ) {
                mayhemextra = mlevels;
                go = true;
            }
        }
        if (!go) {
            mlevels = 4;
            if (
                (((RcalcEnemyHealth(game.global.world + mlevels) / boss)) <= (attack * (hitsmap * (mlevels + 1)))) &&
                ((((RcalcBadGuyDmg(null, RgetEnemyMaxAttack((game.global.world + mlevels), 20, 'Snimp', 1.0))) / boss * 1.3) * (hitssurv)) <= health)
            ) {
                mayhemextra = mlevels;
                go = true;
            }
        }
        if (!go) {
            mlevels = 3;
            if (
                (((RcalcEnemyHealth(game.global.world + mlevels) / boss)) <= (attack * (hitsmap * (mlevels + 1)))) &&
                ((((RcalcBadGuyDmg(null, RgetEnemyMaxAttack((game.global.world + mlevels), 20, 'Snimp', 1.0))) / boss * 1.3) * (hitssurv)) <= health)
            ) {
                mayhemextra = mlevels;
                go = true;
            }
        }
        if (!go) {
            mlevels = 2;
            if (
                (((RcalcEnemyHealth(game.global.world + mlevels) / boss)) <= (attack * (hitsmap * (mlevels + 1)))) &&
                ((((RcalcBadGuyDmg(null, RgetEnemyMaxAttack((game.global.world + mlevels), 20, 'Snimp', 1.0))) / boss * 1.3) * (hitssurv)) <= health)
            ) {
                mayhemextra = mlevels;
                go = true;
            }
        }
        if (!go) {
            mlevels = 1;
            if (
                (((RcalcEnemyHealth(game.global.world + mlevels) / boss)) <= (attack * (hitsmap * (mlevels + 1)))) &&
                ((((RcalcBadGuyDmg(null, RgetEnemyMaxAttack((game.global.world + mlevels), 20, 'Snimp', 1.0))) / boss * 1.3) * (hitssurv)) <= health)
            ) {
                mayhemextra = mlevels;
                go = true;
            }
        }
        if (!go) {
            mayhemextra = 0;
            go = true;
        }
    }
    return mayhemextra;
}

//Panda

function RpandaExtra() {
    var pandaextra = 1;
    if (Rshouldpanda == true && getPageSetting('Rpandamaps') == true) {
        pandaextra = 1;
        var health = (RcalcOurHealth() * 2);
        var attack = RcalcOurDmg("avg", false, true);
        var mult = (game.challenges.Pandemonium.getEnemyMult() * game.challenges.Pandemonium.getPandMult());
        var boss = game.challenges.Pandemonium.getBossMult();
        var hitsmap = (getPageSetting('Rpandahits') > 0) ? getPageSetting('Rpandahits') : 10;
        var hitssurv = 1;
        var mlevels = 6;
        var go = false;
        if (
            (((RcalcEnemyHealth(game.global.world + mlevels) / boss) * mult) <= (attack * (hitsmap * (mlevels + 1)))) &&
            ((((((RcalcBadGuyDmg(null, RgetEnemyMaxAttack((game.global.world + mlevels), 20, 'Snimp', 1.0))) / boss) * mult) * 1.3) * (hitssurv)) <= health)
        ) {
            pandaextra = mlevels;
            go = true;
        }
        if (!go) {
            mlevels = 5;
            if (
                (((RcalcEnemyHealth(game.global.world + mlevels) / boss) * mult) <= (attack * (hitsmap * (mlevels + 1)))) &&
                ((((((RcalcBadGuyDmg(null, RgetEnemyMaxAttack((game.global.world + mlevels), 20, 'Snimp', 1.0))) / boss) * mult) * 1.3) * (hitssurv)) <= health)
            ) {
                pandaextra = mlevels;
                go = true;
            }
        }
        if (!go) {
            mlevels = 4;
            if (
                (((RcalcEnemyHealth(game.global.world + mlevels) / boss) * mult) <= (attack * (hitsmap * (mlevels + 1)))) &&
                ((((((RcalcBadGuyDmg(null, RgetEnemyMaxAttack((game.global.world + mlevels), 20, 'Snimp', 1.0))) / boss) * mult) * 1.3) * (hitssurv)) <= health)
            ) {
                pandaextra = mlevels;
                go = true;
            }
        }
        if (!go) {
            mlevels = 3;
            if (
                (((RcalcEnemyHealth(game.global.world + mlevels) / boss) * mult) <= (attack * (hitsmap * (mlevels + 1)))) &&
                ((((((RcalcBadGuyDmg(null, RgetEnemyMaxAttack((game.global.world + mlevels), 20, 'Snimp', 1.0))) / boss) * mult) * 1.3) * (hitssurv)) <= health)
            ) {
                pandaextra = mlevels;
                go = true;
            }
        }
        if (!go) {
            mlevels = 2;
            if (
                (((RcalcEnemyHealth(game.global.world + mlevels) / boss) * mult) <= (attack * (hitsmap * (mlevels + 1)))) &&
                ((((((RcalcBadGuyDmg(null, RgetEnemyMaxAttack((game.global.world + mlevels), 20, 'Snimp', 1.0))) / boss) * mult) * 1.3) * (hitssurv)) <= health)
            ) {
                pandaextra = mlevels;
                go = true;
            }
        }
        if (!go) {
            mlevels = 1;
            pandaextra = mlevels;
            go = true;
        }
    }
    return pandaextra;
}

//Insanity

function Rinsanity(should, level, reset) {
    var insanityfarmzone = getPageSetting('Rinsanityfarmzone');
    var insanitystacksfarmindex = insanityfarmzone.indexOf(game.global.world);

    var insanityfarmlevel = getPageSetting('Rinsanityfarmlevel');
    if (level) return insanityfarmlevel[insanitystacksfarmindex];

    var insanityfarmstacks;
    var insanitystacks = game.challenges.Insanity.insanity;
    var maxinsanity = game.challenges.Insanity.maxInsanity;

    insanityfarmzone = getPageSetting('Rinsanityfarmzone');
    insanityfarmstacks = getPageSetting('Rinsanityfarmstack');

    var insanitystacksfarmindex = insanityfarmzone.indexOf(game.global.world);
    var insanitystackszones = insanityfarmstacks[insanitystacksfarmindex];
    if (insanitystackszones > maxinsanity) {
        insanitystackszones = maxinsanity;
    }

    if (should && insanityfarmzone.includes(game.global.world) && insanitystackszones != insanitystacks) {
        Rshouldinsanityfarm = true;
    }

    if (reset && !Rshouldinsanityfarm) {
        insanityfragmappy = undefined;
        insanityprefragmappy = undefined;
        insanityfragmappybought = false;
    }
}

function RinsanityMap() {
    var insanityfragcheck = true;
    if (getPageSetting('Rinsanityfarmfrag') == true) {
        if (RfragCheck("insanity") == true) {
            insanityfragcheck = true;
            Rinsanityfragfarming = false;
        } else if (RfragCheck("insanity") == false && Rshouldinsanityfarm) {
            Rinsanityfragfarming = true;
            insanityfragcheck = false;
            if (!insanityfragcheck && insanityfragmappy == undefined && !insanityfragmappybought && game.global.preMapsActive && Rshouldinsanityfarm) {
                debug("Check complete for insanity frag map");
                RfragMap();
                if ((updateMapCost(true) <= game.resources.fragments.owned)) {
                    buyMap();
                    insanityfragmappybought = true;
                    if (insanityfragmappybought) {
                        insanityfragmappy = game.global.mapsOwnedArray[game.global.mapsOwnedArray.length - 1].id;
                        debug("insanity frag map bought");
                    }
                }
            }
            if (!insanityfragcheck && game.global.preMapsActive && !game.global.mapsActive && insanityfragmappybought && insanityfragmappy != undefined && Rshouldinsanityfarm) {
                debug("running insanity frag map");
                selectedMap = insanityfragmappy;
                selectMap(insanityfragmappy);
                runMap();
                RlastMapWeWereIn = getCurrentMapObject();
                insanityprefragmappy = insanityfragmappy;
                insanityfragmappy = undefined;
            }
            if (!insanityfragcheck && game.global.mapsActive && insanityfragmappybought && insanityprefragmappy != undefined && Rshouldinsanityfarm) {
                if (RfragCheck("insanity") == false) {
                    if (!game.global.repeatMap) {
                        repeatClicked();
                    }
                } else if (RfragCheck("insanity") == true) {
                    if (game.global.repeatMap) {
                        repeatClicked();
                        mapsClicked();
                    }
                    if (game.global.preMapsActive && insanityfragmappybought && insanityprefragmappy != undefined && Rshouldinsanityfarm) {
                        insanityfragmappybought = false;
                    }
                    if (insanityprefragmappy != undefined) {
                        recycleMap(getMapIndex(insanityprefragmappy));
                        insanityprefragmappy = undefined;
                    }
                    insanityfragcheck = true;
                    Rinsanityfragfarming = false;
                }
            }
        } else {
            insanityfragcheck = true;
            Rinsanityfragfarming = false;
        }
    }
    if (insanityfragcheck && getPageSetting('Rinsanityfarmlevel') != 0) {

        var insanitylevelzones = Rinsanity(false, true, false);
        if (insanitylevelzones > 0) {
            RminFragMap("Plentiful", insanitylevelzones, "fa")
            document.getElementById("mapLevelInput").value = game.global.world;
            document.getElementById("advExtraLevelSelect").value = insanitylevelzones;
        } else if (insanitylevelzones < 0) {
            RminFragMap("Plentiful", insanitylevelzones, "fa")
            document.getElementById("mapLevelInput").value = (game.global.world + insanitylevelzones);
            document.getElementById("advExtraLevelSelect").value = 0;
        }
    }
    updateMapCost();
}

//Storm

function Rstorm(should) {
    var stormzone = getPageSetting('Rstormzone');
    var stormHD = getPageSetting('RstormHD');
    var stormmult = getPageSetting('Rstormmult');
    var stormHDzone = (game.global.world - stormzone);
    var stormHDmult = (stormHDzone == 0) ? stormHD : Math.pow(stormmult, stormHDzone) * stormHD;

    if (should && game.global.world >= stormzone && RcalcHDratio() > stormHDmult) {
        Rshouldstormfarm = true;
    }
}

//Desolation

function Rdeso(should) {
    var desozone = getPageSetting('Rdesozone');
    var desoHD = getPageSetting('RdesoHD');
    var desomult = getPageSetting('Rdesomult');
    var desoHDzone = (game.global.world - desozone);
    var desoHDmult = (desoHDzone == 0) ? desoHD : Math.pow(desomult, desoHDzone) * desoHD;

    if (should && game.global.world >= desozone && RcalcHDratio() > desoHDmult) {
        Rshoulddesofarm = true;
    }
}

function RdesoExtra() {
    var desoextra = 1;
    if (Rshoulddesofarm == true) {
        desoextra = 1;
        var health = (RcalcOurHealth() * 2);
        var attack = RcalcOurDmg("avg", false, true);
        var hitsmap = 10;
        var hitssurv = 1;
        var mlevels = 6;
        var go = false;
        if (
            ((RcalcEnemyHealth(game.global.world + mlevels)) <= (attack * (hitsmap * (mlevels + 1)))) &&
            (((RcalcBadGuyDmg(null, RgetEnemyMaxAttack((game.global.world + mlevels), 20, 'Snimp', 1.0)) * 1.3) * (hitssurv)) <= health)
        ) {
            desoextra = mlevels;
            go = true;
        }
        if (!go) {
            mlevels = 5;
            if (
                ((RcalcEnemyHealth(game.global.world + mlevels)) <= (attack * (hitsmap * (mlevels + 1)))) &&
                (((RcalcBadGuyDmg(null, RgetEnemyMaxAttack((game.global.world + mlevels), 20, 'Snimp', 1.0)) * 1.3) * (hitssurv)) <= health)
            ) {
                desoextra = mlevels;
                go = true;
            }
        }
        if (!go) {
            mlevels = 4;
            if (
                ((RcalcEnemyHealth(game.global.world + mlevels)) <= (attack * (hitsmap * (mlevels + 1)))) &&
                (((RcalcBadGuyDmg(null, RgetEnemyMaxAttack((game.global.world + mlevels), 20, 'Snimp', 1.0)) * 1.3) * (hitssurv)) <= health)
            ) {
                desoextra = mlevels;
                go = true;
            }
        }
        if (!go) {
            mlevels = 3;
            if (
                ((RcalcEnemyHealth(game.global.world + mlevels)) <= (attack * (hitsmap * (mlevels + 1)))) &&
                (((RcalcBadGuyDmg(null, RgetEnemyMaxAttack((game.global.world + mlevels), 20, 'Snimp', 1.0)) * 1.3) * (hitssurv)) <= health)
            ) {
                desoextra = mlevels;
                go = true;
            }
        }
        if (!go) {
            mlevels = 2;
            if (
                ((RcalcEnemyHealth(game.global.world + mlevels)) <= (attack * (hitsmap * (mlevels + 1)))) &&
                (((RcalcBadGuyDmg(null, RgetEnemyMaxAttack((game.global.world + mlevels), 20, 'Snimp', 1.0)) * 1.3) * (hitssurv)) <= health)
            ) {
                desoextra = mlevels;
                go = true;
            }
        }
        if (!go) {
            mlevels = 1;
            desoextra = mlevels;
            go = true;
        }
    }
    return desoextra;
}

//Ships

function Rship(should, level, reset) {

    var shipfarmzone = getPageSetting('Rshipfarmzone');
    var shipamountfarmindex = shipfarmzone.indexOf(game.global.world);

    var shipfarmlevel = getPageSetting('Rshipfarmlevel');
    if (level) return shipfarmlevel[shipamountfarmindex];

    var shipfarmamount = getPageSetting('Rshipfarmamount');
    var ships = game.jobs.Worshipper.owned;
    var shipamountzones = shipfarmamount[shipamountfarmindex];

    if (getPageSetting('Rshipfarmamount') == 50) shipamountzones = 50;

    if (should && shipfarmzone.includes(game.global.world) && shipamountzones > ships) {
        Rshouldshipfarm = true;
    }

    if (reset && !Rshouldshipfarm) {
        shipfragmappy = undefined;
        shipprefragmappy = undefined;
        shipfragmappybought = false;
    }
}

function RshipMap() {
    var shipfragcheck = true;
    if (getPageSetting('Rshipfarmfrag') == true) {
        if (RfragCheck("ship") == true) {
            shipfragcheck = true;
            Rshipfragfarming = false;
        } else if (RfragCheck("ship") == false && Rshouldshipfarm) {
            Rshipfragfarming = true;
            shipfragcheck = false;
            if (!shipfragcheck && shipfragmappy == undefined && !shipfragmappybought && game.global.preMapsActive && Rshouldshipfarm) {
                debug("Check complete for ship frag map");
                RfragMap();
                if ((updateMapCost(true) <= game.resources.fragments.owned)) {
                    buyMap();
                    shipfragmappybought = true;
                    if (shipfragmappybought) {
                        shipfragmappy = game.global.mapsOwnedArray[game.global.mapsOwnedArray.length - 1].id;
                        debug("ship frag map bought");
                    }
                }
            }
            if (!shipfragcheck && game.global.preMapsActive && !game.global.mapsActive && shipfragmappybought && shipfragmappy != undefined && Rshouldshipfarm) {
                debug("running ship frag map");
                selectedMap = shipfragmappy;
                selectMap(shipfragmappy);
                runMap();
                RlastMapWeWereIn = getCurrentMapObject();
                shipprefragmappy = shipfragmappy;
                shipfragmappy = undefined;
            }
            if (!shipfragcheck && game.global.mapsActive && shipfragmappybought && shipprefragmappy != undefined && Rshouldshipfarm) {
                if (RfragCheck("ship") == false) {
                    if (!game.global.repeatMap) {
                        repeatClicked();
                    }
                } else if (RfragCheck("ship") == true) {
                    if (game.global.repeatMap) {
                        repeatClicked();
                        mapsClicked();
                    }
                    if (game.global.preMapsActive && shipfragmappybought && shipprefragmappy != undefined && Rshouldshipfarm) {
                        shipfragmappybought = false;
                    }
                    if (shipprefragmappy != undefined) {
                        recycleMap(getMapIndex(shipprefragmappy));
                        shipprefragmappy = undefined;
                    }
                    shipfragcheck = true;
                    Rshipfragfarming = false;
                }
            }
        } else {
            shipfragcheck = true;
            Rshipfragfarming = false;
        }
    }
    if (shipfragcheck && getPageSetting('Rshipfarmlevel') != 0) {

        var shiplevelzones = Rship(false, true, false);

        if (Rshouldshipfarm) {
            var special = game.global.highestRadonLevelCleared > 83 ? "lsc" : "ssc";
            var selection = game.global.farmlandsUnlocked ? "Farmlands" : "Plentiful";
            if (shiplevelzones > 0) {
                RminFragMap(selection, shiplevelzones, special);
                document.getElementById("mapLevelInput").value = game.global.world;
                document.getElementById("advExtraLevelSelect").value = shiplevelzones;
            } else if (shiplevelzones == 0) {
                RminFragMap(selection, shiplevelzones, special);
                document.getElementById("mapLevelInput").value = game.global.world;
                document.getElementById("advExtraLevelSelect").value = 0;
            } else if (shiplevelzones < 0) {
                document.getElementById("mapLevelInput").value = (game.global.world + shiplevelzones);
                document.getElementById("advExtraLevelSelect").value = 0;
            }
        }
    }

    updateMapCost();
}

//Alch

function Ralch(should, level, reset) {
    var alchfarmzone = getPageSetting('Ralchfarmzone');
    var alchstacksfarmindex = alchfarmzone.indexOf(game.global.world);

    var alchfarmlevel = getPageSetting('Ralchfarmlevel');
    if (level) return alchfarmlevel[alchstacksfarmindex];

    var alchfarmstacks = getPageSetting('Ralchfarmstack');

    var alchstackszones = alchfarmstacks[alchstacksfarmindex];
    if (alchstackszones != undefined) {
        var potion;
        var potionletter = alchstackszones[0];
        if (potionletter == 'h') {
            potion = alchObj.getPotionCount('Herby Brew');
            potionletter = "Herby Brew";
        } else if (potionletter == 'f') {
            potion = alchObj.getPotionCount('Potion of Finding');
            potionletter = "Potion of Finding";
        } else if (potionletter == 'g') {
            potion = alchObj.getPotionCount('Gaseous Brew');
            potionletter = "Gaseous Brew";
        } else if (potionletter == 'v') {
            potion = alchObj.getPotionCount('Potion of the Void');
            potionletter = "Potion of the Void";
        } else if (potionletter == 's') {
            potion = alchObj.getPotionCount('Potion of Strength');
            potionletter = "Potion of Strength";
        }

        if (alchstackszones.substring(1) > potion) {
            alchObj.craftPotion(potionletter);
        }

        if (should && alchfarmzone.includes(game.global.world) && alchstackszones.substring(1) > potion) {
            Rshouldalchfarm = true;
        }
    }

    if (reset && !Rshouldalchfarm) {
        alchfragmappy = undefined;
        alchprefragmappy = undefined;
        alchfragmappybought = false;
    }
}

function RalchMap() {
    var alchfragcheck = true;
    if (getPageSetting('Ralchfarmfrag') == true) {
        if (RfragCheck("alch") == true) {
            alchfragcheck = true;
            Ralchfragfarming = false;
        } else if (RfragCheck("alch") == false && Rshouldalchfarm) {
            Ralchfragfarming = true;
            alchfragcheck = false;
            if (!alchfragcheck && alchfragmappy == undefined && !alchfragmappybought && game.global.preMapsActive && Rshouldalchfarm) {
                debug("Check complete for alch frag map");
                RfragMap();
                if ((updateMapCost(true) <= game.resources.fragments.owned)) {
                    buyMap();
                    alchfragmappybought = true;
                    if (alchfragmappybought) {
                        alchfragmappy = game.global.mapsOwnedArray[game.global.mapsOwnedArray.length - 1].id;
                        debug("alch frag map bought");
                    }
                }
            }
            if (!alchfragcheck && game.global.preMapsActive && !game.global.mapsActive && alchfragmappybought && alchfragmappy != undefined && Rshouldalchfarm) {
                debug("running alch frag map");
                selectedMap = alchfragmappy;
                selectMap(alchfragmappy);
                runMap();
                RlastMapWeWereIn = getCurrentMapObject();
                alchprefragmappy = alchfragmappy;
                alchfragmappy = undefined;
            }
            if (!alchfragcheck && game.global.mapsActive && alchfragmappybought && alchprefragmappy != undefined && Rshouldalchfarm) {
                if (RfragCheck("alch") == false) {
                    if (!game.global.repeatMap) {
                        repeatClicked();
                    }
                } else if (RfragCheck("alch") == true) {
                    if (game.global.repeatMap) {
                        repeatClicked();
                        mapsClicked();
                    }
                    if (game.global.preMapsActive && alchfragmappybought && alchprefragmappy != undefined && Rshouldalchfarm) {
                        alchfragmappybought = false;
                    }
                    if (alchprefragmappy != undefined) {
                        recycleMap(getMapIndex(alchprefragmappy));
                        alchprefragmappy = undefined;
                    }
                    alchfragcheck = true;
                    Ralchfragfarming = false;
                }
            }
        } else {
            alchfragcheck = true;
            Ralchfragfarming = false;
        }
    }
    if (alchfragcheck && getPageSetting('Ralchfarmlevel') != 0) {
        if (Rshouldalchfarm) {

            var alchfarmzone = getPageSetting('Ralchfarmzone');
            var alchfarmselection = getPageSetting('Ralchfarmselection')
            var alchlevelzones = Ralch(false, true, false);
            var alchfarmselectionindex = alchfarmzone.indexOf(game.global.world);
            var selection = alchfarmselection[alchfarmselectionindex];
            if (selection == 'Mountain') selection = "Mountain";
            else if (selection == 'Forest') selection = "Forest";
            else if (selection == 'Sea') selection = "Sea";
            else if (selection == 'Depths') selection = "Depths";
            else if (selection == 'Plentiful') selection = "Plentiful";
            else if (selection == 'Farmlands') selection = "Farmlands";

            RminFragMap(selection, alchlevelzones, "fa");
        }
    }
    updateMapCost();
}

//Hypo

function Rhypo(should, level, reset) {
    var hypofarmzone = getPageSetting('Rhypofarmzone');
    var hypoamountfarmindex = hypofarmzone.indexOf(game.global.world);

    var hypofarmlevel = getPageSetting('Rhypofarmlevel');
    if (level) return hypofarmlevel[hypoamountfarmindex];

    var bonfire = game.challenges.Hypothermia.totalBonfires;
    var wood = game.resources.wood.max;
    var woodmax = wood * (1 + game.portal.Packrat.radLevel * game.portal.Packrat.modifier);
    woodmax = calcHeirloomBonus("Shield", "storageSize", woodmax, false);

    var hypofarmamount = getPageSetting('Rhypofarmstack');
    var hypoamountzones = hypofarmamount[hypoamountfarmindex];

    var currentprice = (1e10 * Math.pow(100, bonfire));
    var targetprice = (currentprice * Math.pow(100, ((hypoamountzones - bonfire) - 1))) * 1.05;
    targetprice += (targetprice / 1000)
    var gofarmbonfire = false;
    if (game.resources.wood.owned < targetprice) {
        gofarmbonfire = true;
    }

    if (should && hypofarmzone.includes(game.global.world) && gofarmbonfire) {
        Rshouldhypofarm = true;
        Rhyposhouldwood = false;
    }
    if (should && hypofarmzone.includes(game.global.world)) {
        Rhyposhouldwood = false;
    }

    if (reset && !Rshouldhypofarm) {
        hypofragmappy = undefined;
        hypoprefragmappy = undefined;
        hypofragmappybought = false;
    }

    if (reset && (gofarmbonfire || bonfire > (getPageSetting('Rhypofarmstack').slice(-1)))) Rhyposhouldwood = false;

}

function RhypoMap() {
    var hypofragcheck = true;
    if (getPageSetting('Rhypofarmfrag') == true) {
        if (RfragCheck("hypo") == true) {
            hypofragcheck = true;
            Rhypofragfarming = false;
        } else if (RfragCheck("hypo") == false && Rshouldhypofarm) {
            Rhypofragfarming = true;
            hypofragcheck = false;
            if (!hypofragcheck && hypofragmappy == undefined && !hypofragmappybought && game.global.preMapsActive && Rshouldhypofarm) {
                debug("Check complete for hypo frag map");
                RfragMap();
                if ((updateMapCost(true) <= game.resources.fragments.owned)) {
                    buyMap();
                    hypofragmappybought = true;
                    if (hypofragmappybought) {
                        hypofragmappy = game.global.mapsOwnedArray[game.global.mapsOwnedArray.length - 1].id;
                        debug("hypo frag map bought");
                    }
                }
            }
            if (!hypofragcheck && game.global.preMapsActive && !game.global.mapsActive && hypofragmappybought && hypofragmappy != undefined && Rshouldhypofarm) {
                debug("running hypo frag map");
                selectedMap = hypofragmappy;
                selectMap(hypofragmappy);
                runMap();
                RlastMapWeWereIn = getCurrentMapObject();
                hypoprefragmappy = hypofragmappy;
                hypofragmappy = undefined;
            }
            if (!hypofragcheck && game.global.mapsActive && hypofragmappybought && hypoprefragmappy != undefined && Rshouldhypofarm) {
                if (RfragCheck("hypo") == false) {
                    if (!game.global.repeatMap) {
                        repeatClicked();
                    }
                } else if (RfragCheck("hypo") == true) {
                    if (game.global.repeatMap) {
                        repeatClicked();
                        mapsClicked();
                    }
                    if (game.global.preMapsActive && hypofragmappybought && hypoprefragmappy != undefined && Rshouldhypofarm) {
                        hypofragmappybought = false;
                    }
                    if (hypoprefragmappy != undefined) {
                        recycleMap(getMapIndex(hypoprefragmappy));
                        hypoprefragmappy = undefined;
                    }
                    hypofragcheck = true;
                    Rhypofragfarming = false;
                }
            }
        } else {
            hypofragcheck = true;
            Rhypofragfarming = false;
        }
    }
    if (hypofragcheck && getPageSetting('Rhypofarmlevel') != 0) {

        var hypolevelzones = Rhypo(false, true, false);

        if (hypolevelzones > 0) {
            RminFragMap("Farmlands", hypolevelzones, "lwc")
            document.getElementById("mapLevelInput").value = game.global.world;
            document.getElementById("advExtraLevelSelect").value = hypolevelzones;
        } else if (hypolevelzones == 0) {
            RminFragMap("Farmlands", hypolevelzones, "lwc")
            document.getElementById("mapLevelInput").value = game.global.world;
            document.getElementById("advExtraLevelSelect").value = 0;
        } else if (hypolevelzones < 0) {
            RminFragMap("Farmlands", hypolevelzones, "lwc")
            document.getElementById("mapLevelInput").value = (game.global.world + hypolevelzones);
            document.getElementById("advExtraLevelSelect").value = 0;
        }
    }
    updateMapCost();
}

//Equip Farm

function RequipExtra() {
    var equipminus = 0;
    if (Rshouldequipfarm) {
        equipminus = 0;
        var health = (RcalcOurHealth() * 2);
        var attack = RcalcOurDmg("avg", false, true);
        var hits = (getPageSetting('Requipfarmhits') > 0) ? getPageSetting('Requipfarmhits') : 10;
        var hitssurv = (getPageSetting('Rhitssurvived') > 0) ? getPageSetting('Rhitssurvived') : 1;
        var mlevels = 0;
        var go = false;
        if (
            ((RcalcEnemyHealth(game.global.world + mlevels)) <= (attack * hits)) &&
            ((((RcalcBadGuyDmg(null, RgetEnemyMaxAttack((game.global.world + mlevels), 20, 'Snimp', 1.0))) * 0.8) * (hitssurv)) <= (health))
        ) {
            equipminus = mlevels;
            go = true;
        }
        if (!go) {
            mlevels = -1;
            if (
                ((RcalcEnemyHealth(game.global.world + mlevels)) <= (attack * hits)) &&
                ((((RcalcBadGuyDmg(null, RgetEnemyMaxAttack((game.global.world + mlevels), 20, 'Snimp', 1.0))) * 0.8) * (hitssurv)) <= (health))
            ) {
                equipminus = mlevels;
                go = true;
            }
        }
        if (!go) {
            mlevels = -2;
            if (
                ((RcalcEnemyHealth(game.global.world + mlevels)) <= (attack * hits)) &&
                ((((RcalcBadGuyDmg(null, RgetEnemyMaxAttack((game.global.world + mlevels), 20, 'Snimp', 1.0))) * 0.8) * (hitssurv)) <= (health))
            ) {
                equipminus = mlevels;
                go = true;
            }
        }
        if (!go) {
            mlevels = -3;
            if (
                ((RcalcEnemyHealth(game.global.world + mlevels)) <= (attack * hits)) &&
                ((((RcalcBadGuyDmg(null, RgetEnemyMaxAttack((game.global.world + mlevels), 20, 'Snimp', 1.0))) * 0.8) * (hitssurv)) <= (health))
            ) {
                equipminus = mlevels;
                go = true;
            }
        }
        if (!go) {
            mlevels = -4;
            if (
                ((RcalcEnemyHealth(game.global.world + mlevels)) <= (attack * hits)) &&
                ((((RcalcBadGuyDmg(null, RgetEnemyMaxAttack((game.global.world + mlevels), 20, 'Snimp', 1.0))) * 0.8) * (hitssurv)) <= (health))
            ) {
                equipminus = mlevels;
                go = true;
            }
        }
        if (!go) {
            mlevels = -5;
            if (
                ((RcalcEnemyHealth(game.global.world + mlevels)) <= (attack * hits)) &&
                ((((RcalcBadGuyDmg(null, RgetEnemyMaxAttack((game.global.world + mlevels), 20, 'Snimp', 1.0))) * 0.8) * (hitssurv)) <= (health))
            ) {
                equipminus = mlevels;
                go = true;
            }
        }
        if (!go) {
            equipminus = -6;
            go = true;
        }
    }
    return equipminus;
}

function Rshould(any, one) {
    if (any) {
        if (!Rshoulddopraid && !Rdshoulddopraid &&
            (RshouldDoMaps ||
                RdoVoids ||
                Rshouldfragfarm ||
                Rshouldtimefarm ||
                Rdshouldtimefarm ||
                Rshouldsmithyfarm ||
                Rshouldtributefarm ||
                Rshoulddoquest > 0 ||
                Rshouldmayhem > 0 ||
                Rshouldpanda ||
                Rshouldinsanityfarm ||
                Rshouldstormfarm ||
                Rshoulddesofarm ||
                Rshouldequipfarm ||
                Rshouldshipfarm ||
                Rshouldalchfarm ||
                Rshouldhypofarm)
        ) return true;
        else return false;
    }

    var should = "no";
    if (one && !Rshoulddopraid && !Rdshoulddopraid) {
        if (Rshouldfragfarm) should = "frag";
        else if (Rshouldmayhem) should = "mayhem";
        else if (Rshouldpanda) should = "panda";
        else if (Rshoulddesofarm) should = "deso";
        else if (Rshouldinsanityfarm) should = "insanity";
        else if (Rshouldalchfarm) should = "alch";
        else if (Rshouldhypofarm) should = "hypo";
        else if (Rshouldshipfarm) should = "ship";
        else if (Rshouldtimefarm) should = "time";
        else if (Rdshouldtimefarm) should = "dtime";
        else if (Rshouldsmithyfarm) should = "smithy";
        else if (Rshouldtributefarm) should = "tribute";
        else if (Rshouldequipfarm) should = "equip";
        else if (Rshoulddoquest) should = "quest";
    }
    if (should != "no") return should;
}

function RselectMayhem() {
    var selectedMap = "create";
    if (getPageSetting('Rmayhemmap') == 2) {
        for (var map in game.global.mapsOwnedArray) {
            if (!game.global.mapsOwnedArray[map].noRecycle && RmayhemExtra() >= 0 && ((game.global.world + RmayhemExtra()) == game.global.mapsOwnedArray[map].level)) {
                selectedMap = game.global.mapsOwnedArray[map].id;
                break;
            } else {
                selectedMap = "create";
            }
        }
    } else {
        for (var map in game.global.mapsOwnedArray) {
            if (!game.global.mapsOwnedArray[map].noRecycle && game.global.world == game.global.mapsOwnedArray[map].level) {
                selectedMap = game.global.mapsOwnedArray[map].id;
                break;
            } else {
                selectedMap = "create";
            }
        }
    }
    return selectedMap;
}

function RselectPanda() {
    var selectedMap = "create";
    if (getPageSetting('Rpandamaps') == true) {
        for (var map in game.global.mapsOwnedArray) {
            if (!game.global.mapsOwnedArray[map].noRecycle && RpandaExtra() >= 0 && ((game.global.world + RpandaExtra()) == game.global.mapsOwnedArray[map].level)) {
                selectedMap = game.global.mapsOwnedArray[map].id;
                break;
            } else {
                selectedMap = "create";
            }
        }
    }
    return selectedMap;
}

function RselectDeso() {
    var selectedMap = "create";
        for (var map in game.global.mapsOwnedArray) {
            if (!game.global.mapsOwnedArray[map].noRecycle && RdesoExtra() >= 0 && ((game.global.world + RdesoExtra()) == game.global.mapsOwnedArray[map].level)) {
                selectedMap = game.global.mapsOwnedArray[map].id;
                break;
            } else {
                selectedMap = "create";
            }
        }
    return selectedMap;
}

function RselectQuest() {
    var selectedMap = "create";
    if (Rshoulddoquest) {
        for (var map in game.global.mapsOwnedArray) {
            if (!game.global.mapsOwnedArray[map].noRecycle && game.global.world == game.global.mapsOwnedArray[map].level) {
                selectedMap = game.global.mapsOwnedArray[map].id;
                break;
            } else {
                selectedMap = "create";
            }
        }
    }
    return selectedMap;
}

function RselectShip() {
    var selectedMap = "create";
    var level = getPageSetting('Rshipfarmlevel');
    var levelzones = Rship(false, true, false);
    var special = game.global.highestRadonLevelCleared > 83 ? "lsc" : "ssc";

    if (level == 0) {
        for (var map in game.global.mapsOwnedArray) {
            if (!game.global.mapsOwnedArray[map].noRecycle && game.global.world == game.global.mapsOwnedArray[map].level && game.global.mapsOwnedArray[map].bonus == special) {
                selectedMap = game.global.mapsOwnedArray[map].id;
                break;
            } else {
                selectedMap = "create";
            }
        }
    } else if (level != 0) {
        if (levelzones != 0) {
            for (var map in game.global.mapsOwnedArray) {
                if (!game.global.mapsOwnedArray[map].noRecycle && ((game.global.world + levelzones) == game.global.mapsOwnedArray[map].level) && game.global.mapsOwnedArray[map].bonus == special) {
                    selectedMap = game.global.mapsOwnedArray[map].id;
                    break;
                } else {
                    selectedMap = "create";
                }
            }
        } else if (levelzones == 0) {
            for (var map in game.global.mapsOwnedArray) {
                if (!game.global.mapsOwnedArray[map].noRecycle && game.global.world == game.global.mapsOwnedArray[map].level && game.global.mapsOwnedArray[map].bonus == special) {
                    selectedMap = game.global.mapsOwnedArray[map].id;
                    break;
                } else {
                    selectedMap = "create";
                }
            }
        }
    }
    return selectedMap;
}

function RselectSmithy() {
    var selectedMap = "create";
    var levelzones = RsmithyCalc(true, false, false, false);
    var special = RsmithyCalc(false, false, true, false);

    if (levelzones != 0) {
        for (var map in game.global.mapsOwnedArray) {
            if (!game.global.mapsOwnedArray[map].noRecycle && ((game.global.world + levelzones) == game.global.mapsOwnedArray[map].level) && game.global.mapsOwnedArray[map].bonus == special) {
                selectedMap = game.global.mapsOwnedArray[map].id;
                break;
            } else {
                selectedMap = "create";
            }
        }
    } else if (levelzones == 0) {
        for (var map in game.global.mapsOwnedArray) {
            if (!game.global.mapsOwnedArray[map].noRecycle && game.global.world == game.global.mapsOwnedArray[map].level && game.global.mapsOwnedArray[map].bonus == special) {
                selectedMap = game.global.mapsOwnedArray[map].id;
                break;
            } else {
                selectedMap = "create";
            }
        }
    }
    return selectedMap;
}

function RselectOther(other) {
    var selectedMap = "create";
    var level = 0;
    var levelzones = 0;
    if (other == "insanity") {
        level = getPageSetting('Rinsanityfarmlevel');
        levelzones = Rinsanity(false, true, false);
    } else if (other == "alch") {
        level = getPageSetting('Ralchfarmlevel');
        levelzones = Ralch(false, true, false);
    } else if (other == "hypo") {
        level = getPageSetting('Rhypofarmlevel');
        levelzones = Rhypo(false, true, false);
    } else if (other == "time") {
        level = getPageSetting('Rtimefarmlevel');
        levelzones = RtimeFarm(false, true, false, false, false);
    } else if (other == "dtime") {
        level = getPageSetting('Rdtimefarmlevel');
        levelzones = RtimeFarm(false, true, false, false, true);
    } else if (other == "tribute") {
        level = getPageSetting('Rtributefarmlevel');
        levelzones = RtributeFarm(false, true, false, false);
    }

    if (level == 0) {
        for (var map in game.global.mapsOwnedArray) {
            if (!game.global.mapsOwnedArray[map].noRecycle && game.global.world == game.global.mapsOwnedArray[map].level) {
                selectedMap = game.global.mapsOwnedArray[map].id;
                break;
            } else {
                selectedMap = "create";
            }
        }
    } else if (level != 0) {
        if (levelzones != 0) {
            for (var map in game.global.mapsOwnedArray) {
                if (!game.global.mapsOwnedArray[map].noRecycle && ((game.global.world + levelzones) == game.global.mapsOwnedArray[map].level)) {
                    selectedMap = game.global.mapsOwnedArray[map].id;
                    break;
                } else {
                    selectedMap = "create";
                }
            }
        } else if (levelzones == 0) {
            for (var map in game.global.mapsOwnedArray) {
                if (!game.global.mapsOwnedArray[map].noRecycle && game.global.world == game.global.mapsOwnedArray[map].level) {
                    selectedMap = game.global.mapsOwnedArray[map].id;
                    break;
                } else {
                    selectedMap = "create";
                }
            }
        }
    }
    return selectedMap;
}

function RselectMap(selectedMap) {
    if (Rshould(true, false) && selectedMap == "world") {

            if (Rshould(false, true) == "frag") {
                selectedMap = RselectFrag();
            } else if (Rshould(false, true) == "mayhem") {
                selectedMap = RselectMayhem();
            } else if (Rshould(false, true) == "panda") {
                selectedMap = RselectPanda();
            } else if (Rshould(false, true) == "deso") {
                selectedMap = RselectDeso();
            } else if (Rshould(false, true) == "insanity") {
                selectedMap = RselectOther("insanity");
            } else if (Rshould(false, true) == "alch") {
                selectedMap = RselectOther("alch");
            } else if (Rshould(false, true) == "hypo") {
                selectedMap = RselectOther("hypo");
            } else if (Rshould(false, true) == "ship") {
                selectedMap = RselectShip();
            } else if (Rshould(false, true) == "time") {
                selectedMap = RselectOther("time");
            } else if (Rshould(false, true) == "dtime") {
                selectedMap = RselectOther("dtime");
            } else if (Rshould(false, true) == "smithy") {
                selectedMap = RselectSmithy();
            } else if (Rshould(false, true) == "tribute") {
                selectedMap = RselectOther("tribute");
            } else if (Rshould(false, true) == "quest") {
                selectedMap = RselectQuest();
            } else if (Rshould(false, true) == "equip") {
                for (var map in game.global.mapsOwnedArray) {
                    if (!game.global.mapsOwnedArray[map].noRecycle && RequipExtra() <= 0 && ((game.global.world + RequipExtra()) == game.global.mapsOwnedArray[map].level)) {
                        selectedMap = game.global.mapsOwnedArray[map].id;
                        break;
                    } else {
                        selectedMap = "create";
                    }
                }
            } else {
                for (var map in game.global.mapsOwnedArray) {
                    if (!game.global.mapsOwnedArray[map].noRecycle && game.global.world == game.global.mapsOwnedArray[map].level) {
                        selectedMap = game.global.mapsOwnedArray[map].id;
                        break;
                    } else {
                        selectedMap = "create";
                    }
                }
            }
    }
    return selectedMap;
}

function RmapRepeat(selectedMap, shouldDoHealthMaps, restartVoidMap) {
    var doDefaultMapBonus = game.global.mapBonus < getPageSetting('RMaxMapBonuslimit') - 1;
    if (
        (RvanillaMAZ) ||
        (Rshoulddopraid || (Rshoulddopraid && RAMPfragfarming)) ||
        (Rdshoulddopraid || (Rdshoulddopraid && RdAMPfragfarming)) ||
        (Rshouldinsanityfarm || (Rshouldinsanityfarm && Rinsanityfragfarming)) ||
        (Rshouldalchfarm || (Rshouldalchfarm && Ralchfragfarming)) ||
        (Rshouldhypofarm || (Rshouldhypofarm && Rhypofragfarming)) ||
        (Rshouldshipfarm || (Rshouldshipfarm && Rshipfragfarming)) ||
        (selectedMap == game.global.currentMapId &&
            (!getCurrentMapObject().noRecycle &&
                (doDefaultMapBonus ||
                    RvanillaMAZ ||
                    RdoMaxMapBonus ||
                    RshouldFarm ||
                    Rshouldfragfarm ||
                    Rshouldtimefarm ||
                    Rdshouldtimefarm ||
                    Rshouldsmithyfarm ||
                    Rshouldtributefarm ||
                    Rshoulddobogs ||
                    (Rshoulddoquest > 0) ||
                    (Rshouldmayhem > 0) ||
                    Rshouldpanda ||
                    Rshouldstormfarm ||
                    Rshoulddesofarm ||
                    Rshouldequipfarm
                )
            )
        )
    ) {
        if (!game.global.repeatMap) {
            repeatClicked();
        }
        if (
            (Rshoulddopraid && !RAMPfragfarming) ||
            (Rdshoulddopraid && !RdAMPfragfarming)
        ) {
            if (game.options.menu.repeatUntil.enabled != 2) {
                game.options.menu.repeatUntil.enabled = 2;
            }

        } else if (
            ((Rshoulddopraid && RAMPfragfarming) || (Rdshoulddopraid && RdAMPfragfarming)) ||
            (Rshouldinsanityfarm && Rinsanityfragfarming) ||
            (Rshouldalchfarm && Ralchfragfarming) ||
            (Rshouldhypofarm && Rhypofragfarming) ||
            (Rshouldshipfarm && Rshipfragfarming)
        ) {
            if (game.options.menu.repeatUntil.enabled != 0) {
                game.options.menu.repeatUntil.enabled = 0;
            }
        }

        if (
            !Rshoulddopraid &&
            !RAMPfragfarming &&
            !Rshouldfragfarm &&
            !Rdshoulddopraid &&
            !RdAMPfragfarming &&
            !Rshouldinsanityfarm &&
            !Rinsanityfragfarming &&
            !Rshouldalchfarm &&
            !Rshouldhypofarm &&
            !Rhypofragfarming &&
            !Ralchfragfarming &&
            !Rshoulddobogs &&
            !RshouldDoMaps &&
            !Rshouldtimefarm &&
            !Rdshouldtimefarm &&
            !Rshouldsmithyfarm &&
            !Rshouldtributefarm &&
            Rshoulddoquest <= 0 &&
            Rshouldmayhem <= 0 &&
            !Rshouldpanda &&
            !Rshouldstormfarm &&
            !Rshoulddesofarm &&
            !Rshouldequipfarm &&
            !Rshouldshipfarm &&
            !Rshipfragfarming
        ) {
            repeatClicked();
        }
        if (shouldDoHealthMaps && game.global.mapBonus >= getPageSetting('RMaxMapBonushealth')) {
            repeatClicked();
            shouldDoHealthMaps = false;
        }
        if (RdoMaxMapBonus && game.global.mapBonus < getPageSetting('RMaxMapBonuslimit')) {
            repeatClicked();
            RdoMaxMapBonus = false;
        }
        if (game.global.repeatMap &&
            (Rshoulddoquest == 3 && game.global.mapBonus >= 4) ||
            (Rshoulddopraid && RAMPfragfarming && RAMPfrag(false) == true) ||
            (Rdshoulddopraid && RdAMPfragfarming && RAMPfrag(true) == true) ||
            (Rshouldinsanityfarm && Rinsanityfragfarming && RfragCheck("insanity") == true) ||
            (Rshouldalchfarm && Ralchfragfarming && RfragCheck("alch") == true) ||
            (Rshouldhypofarm && Rhypofragfarming && RfragCheck("hypo") == true) ||
            (Rshouldshipfarm && Rshipfragfarming && RfragCheck("ship") == true)
        ) {
            repeatClicked();
        }

    } else {
        if (game.global.repeatMap) {
            repeatClicked();
        }
        if (restartVoidMap) {
            mapsClicked(true);
        }
    }
}

function RquestMap(quest) {
    biomeAdvMapsSelect.value = "Plentiful";
    if (quest == 4) {
        document.getElementById("advSpecialSelect").value = "hc";
        updateMapCost();
        if (updateMapCost(true) > game.resources.fragments.owned) {
            document.getElementById("advSpecialSelect").value = "fa";
            updateMapCost();
            if (updateMapCost(true) > game.resources.fragments.owned) {
                document.getElementById("advSpecialSelect").value = 0;
                updateMapCost();
            }
        }
    }
    if (quest == 7) {
        document.getElementById("advSpecialSelect").value = "hc";
        updateMapCost();
        if (updateMapCost(true) > game.resources.fragments.owned) {
            document.getElementById("advSpecialSelect").value = "lc";
            updateMapCost();
            if (updateMapCost(true) > game.resources.fragments.owned) {
                document.getElementById("advSpecialSelect").value = "fa";
                updateMapCost();
                if (updateMapCost(true) > game.resources.fragments.owned) {
                    document.getElementById("advSpecialSelect").value = 0;
                    updateMapCost();
                }
            }
        }
    }
    if (quest == 10) {
        document.getElementById("advSpecialSelect").value = "lsc";
        updateMapCost();
        if (updateMapCost(true) > game.resources.fragments.owned) {
            document.getElementById("advSpecialSelect").value = "ssc";
            updateMapCost();
            if (updateMapCost(true) > game.resources.fragments.owned) {
                document.getElementById("advSpecialSelect").value = "fa";
                updateMapCost();
                if (updateMapCost(true) > game.resources.fragments.owned) {
                    document.getElementById("advSpecialSelect").value = 0;
                    updateMapCost();
                }
            }
        }
    }
    if (quest == 11) {
        document.getElementById("advSpecialSelect").value = "lwc";
        updateMapCost();
        if (updateMapCost(true) > game.resources.fragments.owned) {
            document.getElementById("advSpecialSelect").value = "swc";
            updateMapCost();
            if (updateMapCost(true) > game.resources.fragments.owned) {
                document.getElementById("advSpecialSelect").value = "fa";
                updateMapCost();
                if (updateMapCost(true) > game.resources.fragments.owned) {
                    document.getElementById("advSpecialSelect").value = 0;
                    updateMapCost();
                }
            }
        }
    }
    if (quest == 12) {
        document.getElementById("advSpecialSelect").value = "lmc";
        updateMapCost();
        if (updateMapCost(true) > game.resources.fragments.owned) {
            document.getElementById("advSpecialSelect").value = "smc";
            updateMapCost();
            if (updateMapCost(true) > game.resources.fragments.owned) {
                document.getElementById("advSpecialSelect").value = "fa";
                updateMapCost();
                if (updateMapCost(true) > game.resources.fragments.owned) {
                    document.getElementById("advSpecialSelect").value = 0;
                    updateMapCost();
                }
            }
        }
    }
    if (quest == 13) {
        document.getElementById("advSpecialSelect").value = "fa";
        updateMapCost();
        if (updateMapCost(true) > game.resources.fragments.owned) {
            document.getElementById("advSpecialSelect").value = 0;
            updateMapCost();
        }
    }
    if (quest == 14) {
        document.getElementById("advSpecialSelect").value = "fa";
        updateMapCost();
        if (updateMapCost(true) > game.resources.fragments.owned) {
            document.getElementById("advSpecialSelect").value = 0;
            updateMapCost();
        }
    }
    if (updateMapCost(true) > game.resources.fragments.owned) {
        biomeAdvMapsSelect.value = "Random";
        updateMapCost();
    }
}

function RlevelMap(what) {
    var extra = 0;
    var globalextra = 0;
    if (what == "mayhem") {
        extra = RmayhemExtra();
    } else if (what == "panda") {
        extra = RpandaExtra();
    } else if (what == "equip") {
        globalextra = RequipExtra();
    } else if (what == "deso") {
        extra = RdesoExtra();
    }
    mapLevelInput.value = (game.global.world + globalextra);
    biomeAdvMapsSelect.value = "Random";
    document.getElementById("advSpecialSelect").value = (what == "equip") ? "lmc" : "fa";
    document.getElementById("advExtraLevelSelect").value = extra;
    updateMapCost();
}

//Auto Finish Challenges
//
//Some one-off challenges (the ones that unlock a perk or a permanent bonus) only end when a specific unique map
//is cleared, not when a zone is reached. AutoTrimps normally runs those maps only in special cases (first Portal
//unlock, AMU toggles, Trimple Z...), so with default settings the challenge would stay active all run and the
//reward would never be earned. While one of these challenges is active (and not as a Challenge²), its completion
//map is run as soon as the zone below is reached.
//
//Format: challenge: [completion map name, earliest zone to run it]
//Zones follow AT's usual rule for unique maps (map level + half its difficulty), so you're strong enough to clear it.
//The Block (Scientist, Trimp) and The Prison (Electricity, Mapocalypse) were already handled by AutoMaps.
//You can tweak a zone from the browser console, e.g. MODULES.finishchallenges.maps.Trapper[1] = 36

MODULES["finishchallenges"] = {};
MODULES["finishchallenges"].maps = {
    //Helium universe
    Discipline: ['Dimension of Anger', 22],   //Range
    Metal: ['Dimension of Anger', 22],        //Artisanistry
    Size: ['Dimension of Anger', 22],         //Carpentry
    Frugal: ['Dimension of Anger', 22],       //MegaBooks +60%
    Coordinate: ['Dimension of Anger', 22],   //Coordinated
    Trapper: ['Trimple Of Doom', 34],         //Anticipation
    Meditate: ['Trimple Of Doom', 34],        //Meditation
    Devastation: ['Imploding Star', 172],     //Overkill
    //Radon universe
    Unlucky: ['Dimension of Rage', 16],       //Range
    Downsize: ['Prismatic Palace', 21],       //Carpentry
    Trappapalooza: ['Melting Point', 51]      //Resilience
};
MODULES["finishchallenges"].announced = "";

//The [map, zone] entry for the active challenge, or null if there's nothing to finish
function finishChallengeEntry() {
    if (!getPageSetting('AutoFinishChallenges')) return null;
    if (game.global.runningChallengeSquared) return null; //C² never complete through these maps
    var challenge = game.global.challengeActive;
    if (!challenge) return null;
    return MODULES["finishchallenges"].maps[challenge] || null;
}

//Called by AutoMaps for each owned unique map: should we run this one now to finish the challenge?
function shouldRunFinishChallengeMap(theMap) {
    var entry = finishChallengeEntry();
    if (!entry || theMap.name != entry[0]) return false;
    if (game.global.world < entry[1]) return false;
    if (MODULES["finishchallenges"].announced != game.global.challengeActive) {
        MODULES["finishchallenges"].announced = game.global.challengeActive;
        debug('Auto Finish Challenges: running ' + entry[0] + ' to complete ' + game.global.challengeActive + '.', "maps", "*map");
    }
    return true;
}

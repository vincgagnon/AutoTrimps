function MAZLookalike(titleText, isItIn, event) {

    var zone;
    var cell;
    var setting;
    var level;
    var map;
    var special;
    var gather;

    zone = [0];
    cell = [0];

    //Settings

    if (titleText == 'Time Farm') {
        zone = 'Rtimefarmzone';
        cell = 'Rtimefarmcell';
        setting = 'Rtimefarmtime';
        level = 'Rtimefarmlevel';
        map = 'Rtimefarmmap';
        special = 'Rtimefarmspecial';
        gather = 'Rtimefarmgather';
    } else if (titleText == 'dTime Farm') {
        zone = 'Rdtimefarmzone';
        cell = 'Rdtimefarmcell';
        setting = 'Rdtimefarmtime';
        level = 'Rdtimefarmlevel';
        map = 'Rdtimefarmmap';
        special = 'Rdtimefarmspecial';
        gather = 'Rdtimefarmgather';
    } else if (titleText.includes('Smithy Farm')) {
        zone = 'Rsmithyfarmzone';
        cell = 'Rsmithyfarmcell';
        setting = 'Rsmithyfarmamount';
    } else if (titleText.includes('Tribute Farm')) {
        zone = 'Rtributefarmzone';
        cell = 'Rtributefarmcell';
        setting = 'Rtributefarmamount';
        level = 'Rtributefarmlevel';
        map = 'Rtributemapselection';
        special = 'Rtributespecialselection';
        gather = 'Rtributegatherselection';
    } else if (titleText == 'Shrine - U1') {
        zone = 'Hshrinezone';
        cell = 'Hshrinecell';
        setting = 'Hshrineamount';
    } else if (titleText == 'Shrine - U2') {
        zone = 'Rshrinezone';
        cell = 'Rshrinecell';
        setting = 'Rshrineamount';
    } else if (titleText == 'Shrine - U1 (Daily)') {
        zone = 'Hdshrinezone';
        cell = 'Hdshrinecell';
        setting = 'Hdshrineamount';
    } else if (titleText == 'Shrine - U2 (Daily)') {
        zone = 'Rdshrinezone';
        cell = 'Rdshrinecell';
        setting = 'Rdshrineamount';
    } else if (titleText.includes('Quagmire')) {
        zone = 'Rblackbogzone';
        setting = 'Rblackbogamount';
    } else if (titleText.includes('Insanity')) {
        zone = 'Rinsanityfarmzone';
        cell = 'Rinsanityfarmcell';
        setting = 'Rinsanityfarmstack';
        level = 'Rinsanityfarmlevel';
    } else if (titleText.includes('Alch')) {
        zone = 'Ralchfarmzone';
        cell = 'Ralchfarmcell';
        setting = 'Ralchfarmstack';
        level = 'Ralchfarmlevel';
        map = 'Ralchfarmselection';
    } else if (titleText.includes('Hypo')) {
        zone = 'Rhypofarmzone';
        cell = 'Rhypofarmcell';
        setting = 'Rhypofarmstack';
        level = 'Rhypofarmlevel';
    } else if (titleText == 'Praid') {
        zone = 'RAMPraidzone';
        cell = 'RAMPraidcell';
        setting = 'RAMPraidraid';
    } else if (titleText == 'dPraid') {
        zone = 'RdAMPraidzone';
        cell = 'RdAMPraidcell';
        setting = 'RdAMPraidraid';
    }


    cancelTooltip();
    titleText = !titleText ? 'undefined' : titleText;
    if (titleText == 'undefined') return;

    var elem = document.getElementById("tooltipDiv");
    swapClass("tooltipExtra", "tooltipExtraNone", elem);
    document.getElementById('tipText').className = "";

    var tooltipText;
    var costText = "";
    var titleText;

    var ondisplay = null;
    var maxSettings = 120;
    var windowHelp = "Welcome to AT\'s version of MaZ! Please read the tooltips of the settings button to get more detailed info on how to use this. However it should be easy enough to figure out!";

    tooltipText = "\
    <div id='windowContainer' style='display: block'><div id='windowError'></div>\
    <div class='row windowRow titles'>\
    <div class='windowCheckbox' style='width: 0%'></div>\
    <div class='windowZone'>Zone</div>"
    if (!titleText.includes('Quagmire')) tooltipText += "<div class='windowCell'>Cell</div>"

    //Windows

    if (titleText == 'Time Farm') {
        tooltipText += "<div class='windowSetting'>Time</div>"
        tooltipText += "<div class='windowMap'>Map</div>"
        tooltipText += "<div class='windowLevel'>Level</div>"
        tooltipText += "<div class='windowSpecial'>Special</div>"
        tooltipText += "<div class='windowGather'>Gather</div>"
    } else if (titleText == 'dTime Farm') {
        tooltipText += "<div class='windowSetting'>Time</div>"
        tooltipText += "<div class='windowMap'>Map</div>"
        tooltipText += "<div class='windowLevel'>Level</div>"
        tooltipText += "<div class='windowSpecial'>Special</div>"
        tooltipText += "<div class='windowGather'>Gather</div>"
    } else if (titleText.includes('Smithy Farm')) {
        tooltipText += "<div class='windowSetting'>Smithys</div>"
    } else if (titleText.includes('Tribute Farm')) {
        tooltipText += "<div class='windowSetting'>Tributes</div>"
        tooltipText += "<div class='windowMap'>Map</div>"
        tooltipText += "<div class='windowLevel'>Level</div>"
        tooltipText += "<div class='windowSpecial'>Special</div>"
        tooltipText += "<div class='windowGather'>Gather</div>"
    } else if (titleText.includes('Shrine')) {
        tooltipText += "<div class='windowSetting'>Amount</div>"
    } else if (titleText.includes('Quagmire')) {
        tooltipText += "<div class='windowSetting'>Black Bogs</div>"
    } else if (titleText.includes('Insanity')) {
        tooltipText += "<div class='windowSetting'>Stacks</div>"
        tooltipText += "<div class='windowLevel'>Level</div>"
    } else if (titleText.includes('Alch')) {
        tooltipText += "<div class='windowSetting'>Potions</div>"
        tooltipText += "<div class='windowMap'>Map</div>"
        tooltipText += "<div class='windowLevel'>Level</div>"
    } else if (titleText.includes('Hypo')) {
        tooltipText += "<div class='windowSetting'>Bonfires</div>"
        tooltipText += "<div class='windowLevel'>Level</div>"
    } else if (titleText == 'Praid') {
        tooltipText += "<div class='windowSetting'>Raid</div>"
    } else if (titleText == 'dPraid') {
        tooltipText += "<div class='windowSetting'>Raid</div>"
    }

    tooltipText += "</div>";

    var current = autoTrimpSettings[zone].value;

    for (var x = 0; x < maxSettings; x++) {
        var vals = {
            check: true,
            zone: -1,
            cell: 81,
            setting: 0,
            map: 0,
            level: -1,
            special: 0,
            gather: 0
        };
        var style = "";

        if (current.length - 1 >= x) {
            vals.zone = autoTrimpSettings[zone].value[x];
            if (!titleText.includes('Quagmire')) vals.cell = autoTrimpSettings[cell].value[x] ? autoTrimpSettings[cell].value[x] : 81;

            //Values

            if (titleText == 'Time Farm') {
                vals.setting = autoTrimpSettings[setting].value[x] ? autoTrimpSettings[setting].value[x] : 0;
                vals.map = autoTrimpSettings[map].value[x] ? autoTrimpSettings[map].value[x] : 0;
                vals.level = autoTrimpSettings[level].value[x] ? autoTrimpSettings[level].value[x] : 0;
                vals.special = autoTrimpSettings[special].value[x] ? autoTrimpSettings[special].value[x] : 0;
                vals.gather = autoTrimpSettings[gather].value[x] ? autoTrimpSettings[gather].value[x] : 0;
            } else if (titleText == 'dTime Farm') {
                vals.setting = autoTrimpSettings[setting].value[x] ? autoTrimpSettings[setting].value[x] : 0;
                vals.map = autoTrimpSettings[map].value[x] ? autoTrimpSettings[map].value[x] : 0;
                vals.level = autoTrimpSettings[level].value[x] ? autoTrimpSettings[level].value[x] : 0;
                vals.special = autoTrimpSettings[special].value[x] ? autoTrimpSettings[special].value[x] : 0;
                vals.gather = autoTrimpSettings[gather].value[x] ? autoTrimpSettings[gather].value[x] : 0;
            } else if (titleText.includes('Smithy Farm')) {
                vals.setting = autoTrimpSettings[setting].value[x] ? autoTrimpSettings[setting].value[x] : 0;
            } else if (titleText.includes('Tribute Farm')) {
                vals.setting = autoTrimpSettings[setting].value[x] ? autoTrimpSettings[setting].value[x] : 0;
                vals.map = autoTrimpSettings[map].value[x] ? autoTrimpSettings[map].value[x] : 0;
                vals.level = autoTrimpSettings[level].value[x] ? autoTrimpSettings[level].value[x] : 0;
                vals.special = autoTrimpSettings[special].value[x] ? autoTrimpSettings[special].value[x] : 0;
                vals.gather = autoTrimpSettings[gather].value[x] ? autoTrimpSettings[gather].value[x] : 0;
            } else if (titleText.includes('Shrine')) {
              vals.setting = autoTrimpSettings[setting].value[x] ? autoTrimpSettings[setting].value[x] : 0;
            } else if (titleText.includes('Quagmire')) {
                vals.setting = autoTrimpSettings[setting].value[x] ? autoTrimpSettings[setting].value[x] : 0;
            } else if (titleText.includes('Insanity')) {
                vals.setting = autoTrimpSettings[setting].value[x] ? autoTrimpSettings[setting].value[x] : 0;
                vals.level = autoTrimpSettings[level].value[x] ? autoTrimpSettings[level].value[x] : 0;
            } else if (titleText.includes('Alch')) {
                vals.setting = autoTrimpSettings[setting].value[x] ? autoTrimpSettings[setting].value[x] : 0;
                vals.map = autoTrimpSettings[map].value[x] ? autoTrimpSettings[map].value[x] : 0;
                vals.level = autoTrimpSettings[level].value[x] ? autoTrimpSettings[level].value[x] : 0;
            } else if (titleText.includes('Hypo')) {
                vals.setting = autoTrimpSettings[setting].value[x] ? autoTrimpSettings[setting].value[x] : 0;
                vals.level = autoTrimpSettings[level].value[x] ? autoTrimpSettings[level].value[x] : 0;
            } else if (titleText == 'Praid') {
                vals.setting = autoTrimpSettings[setting].value[x] ? autoTrimpSettings[setting].value[x] : 0;
            } else if (titleText == 'dPraid') {
                vals.setting = autoTrimpSettings[setting].value[x] ? autoTrimpSettings[setting].value[x] : 0;
            }
        } else style = " style='display: none' ";

        var gatherDropdown = "<option value='food'" + ((vals.gather == 'food') ? " selected='selected'" : "") + ">Food</option>\"<option value='metal'" + ((vals.gather == 'metal') ? " selected='selected'" : "") + ">Metal</option>\"<option value='wood'" + ((vals.gather == 'wood') ? " selected='selected'" : "") + ">Wood</option>\"<option value='science'" + ((vals.gather == 'science') ? " selected='selected'" : "") + ">Science</option>"
        var mapDropdown = "<option value='Random'" + ((vals.map == 'Random') ? " selected='selected'" : "") + ">Random</option>\"<option value='Mountain'" + ((vals.map == 'Mountain') ? " selected='selected'" : "") + ">Moutain</option>\"<option value='Forest'" + ((vals.map == 'Forest') ? " selected='selected'" : "") + ">Forest</option>\"<option value='Sea'" + ((vals.map == 'Sea') ? " selected='selected'" : "") + ">Sea</option>\"<option value='Depths'" + ((vals.map == 'Depths') ? " selected='selected'" : "") + ">Depths</option>\"<option value='Plentiful'" + ((vals.map == 'Plentiful') ? " selected='selected'" : "") + ">Gardens</option>\"<option value='Farmlands'" + ((vals.map == 'Farmlands') ? " selected='selected'" : "") + ">Farmlands</option>"
        var specialsDropdown = "<option value='fa'" + ((vals.special == 'fa') ? " selected='selected'" : "") + ">Fast Attack</option>\<option value='lc'" + ((vals.special == 'lc') ? " selected='selected'" : "") + ">Large Cache</option>\<option value='ssc'" + ((vals.special == 'ssc') ? " selected='selected'" : "") + ">Small Savory Cache</option>\<option value='swc'" + ((vals.special == 'swc') ? " selected='selected'" : "") + ">Small Wooden Cache</option>\<option value='smc'" + ((vals.special == 'smc') ? " selected='selected'" : "") + ">Small Metal Cache</option>\\<option value='src'" + ((vals.special == 'src') ? " selected='selected'" : "") + ">Small Research Cache</option>\<option value='p'" + ((vals.special == 'p') ? " selected='selected'" : "") + ">Prestigious</option>\<option value='hc'" + ((vals.special == 'hc') ? " selected='selected'" : "") + ">Huge Cache</option>\<option value='lsc'" + ((vals.special == 'lsc') ? " selected='selected'" : "") + ">Large Savory Cache</option>\<option value='lwc'" + ((vals.special == 'lwc') ? " selected='selected'" : "") + ">Large Wooden Cache</option>\<option value='lmc'" + ((vals.special == 'lmc') ? " selected='selected'" : "") + ">Large Metal Cache</option>\<option value='lrc'" + ((vals.special == 'lrc') ? " selected='selected'" : "") + ">Large Research Cache</option>"

        var className = (vals.preset == 3) ? "windowBwMainOn" : "windowBwMainOff";
        tooltipText += "<div id='windowRow" + x + "' class='row windowRow " + className + "'" + style + ">";
        tooltipText += "<div class='windowDelete' onclick='removeRow(" + x + ")'><span class='icomoon icon-cross'></span></div>";
        tooltipText += "<div class='windowZone'><input value='" + vals.zone + "' type='number' id='windowZone" + x + "'/></div>";
        if (!titleText.includes('Quagmire')) tooltipText += "<div class='windowCell'><input value='" + vals.cell + "' type='number' id='windowCell" + x + "'/></div>";

        //Tooltips

        if (titleText == 'Time Farm') {
            tooltipText += "<div class='windowSetting'><input value='" + vals.setting + "' type='number' id='windowSetting" + x + "'/></div>";
            tooltipText += "<div class='windowMap' onchange='updateWindowPreset(" + x + ")'><select value='" + vals.map + "' id='windowMap" + x + "'>" + mapDropdown + "</select></div>"
            tooltipText += "<div class='windowLevel'><input value='" + vals.level + "' type='number' id='windowLevel" + x + "'/></div>";
            tooltipText += "<div class='windowSpecial' onchange='updateWindowPreset(" + x + ")'><select value='" + vals.special + "' id='windowSpecial" + x + "'>" + specialsDropdown + "</select></div>"
            tooltipText += "<div class='windowGather' onchange='updateWindowPreset(" + x + ")'><select value='" + vals.gather + "' id='windowGather" + x + "'>" + gatherDropdown + "</select></div>"
        } else if (titleText == 'dTime Farm') {
            tooltipText += "<div class='windowSetting'><input value='" + vals.setting + "' type='number' id='windowSetting" + x + "'/></div>";
            tooltipText += "<div class='windowMap' onchange='updateWindowPreset(" + x + ")'><select value='" + vals.map + "' id='windowMap" + x + "'>" + mapDropdown + "</select></div>"
            tooltipText += "<div class='windowLevel'><input value='" + vals.level + "' type='number' id='windowLevel" + x + "'/></div>";
            tooltipText += "<div class='windowSpecial' onchange='updateWindowPreset(" + x + ")'><select value='" + vals.special + "' id='windowSpecial" + x + "'>" + specialsDropdown + "</select></div>"
            tooltipText += "<div class='windowGather' onchange='updateWindowPreset(" + x + ")'><select value='" + vals.gather + "' id='windowGather" + x + "'>" + gatherDropdown + "</select></div>"
        } else if (titleText.includes('Smithy Farm')) {
            tooltipText += "<div class='windowSetting'><input value='" + vals.setting + "' type='number' id='windowSetting" + x + "'/></div>";    
        } else if (titleText.includes('Tribute Farm')) {
            tooltipText += "<div class='windowSetting'><input value='" + vals.setting + "' type='number' id='windowSetting" + x + "'/></div>";
            tooltipText += "<div class='windowMap' onchange='updateWindowPreset(" + x + ")'><select value='" + vals.map + "' id='windowMap" + x + "'>" + mapDropdown + "</select></div>"
            tooltipText += "<div class='windowLevel'><input value='" + vals.level + "' type='number' id='windowLevel" + x + "'/></div>";
            tooltipText += "<div class='windowSpecial' onchange='updateWindowPreset(" + x + ")'><select value='" + vals.special + "' id='windowSpecial" + x + "'>" + specialsDropdown + "</select></div>"
            tooltipText += "<div class='windowGather' onchange='updateWindowPreset(" + x + ")'><select value='" + vals.gather + "' id='windowGather" + x + "'>" + gatherDropdown + "</select></div>"
        } else if (titleText.includes('Shrine')) {
            tooltipText += "<div class='windowSetting'><input value='" + vals.setting + "' type='number' id='windowSetting" + x + "'/></div>";
        } else if (titleText.includes('Quagmire')) {
            tooltipText += "<div class='windowSetting'><input value='" + vals.setting + "' type='number' id='windowSetting" + x + "'/></div>";
        } else if (titleText.includes('Insanity')) {
            tooltipText += "<div class='windowSetting'><input value='" + vals.setting + "' type='number' id='windowSetting" + x + "'/></div>";
            tooltipText += "<div class='windowLevel'><input value='" + vals.level + "' type='number' id='windowLevel" + x + "'/></div>";
        } else if (titleText.includes('Alch')) {
            tooltipText += "<div class='windowSetting'><input value='" + vals.setting + "' type='text' id='windowSetting" + x + "'/></div>";
            tooltipText += "<div class='windowMap' onchange='updateWindowPreset(" + x + ")'><select value='" + vals.map + "' id='windowMap" + x + "'>" + mapDropdown + "</select></div>"
            tooltipText += "<div class='windowLevel'><input value='" + vals.level + "' type='number' id='windowLevel" + x + "'/></div>";
        } else if (titleText.includes('Hypo')) {
            tooltipText += "<div class='windowSetting'><input value='" + vals.setting + "' type='number' id='windowSetting" + x + "'/></div>";
            tooltipText += "<div class='windowLevel'><input value='" + vals.level + "' type='number' id='windowLevel" + x + "'/></div>";
        } else if (titleText == 'Praid') {
            tooltipText += "<div class='windowSetting'><input value='" + vals.setting + "' type='number' id='windowSetting" + x + "'/></div>";
        } else if (titleText == 'dPraid') {
            tooltipText += "<div class='windowSetting'><input value='" + vals.setting + "' type='number' id='windowSetting" + x + "'/></div>";
        }

        tooltipText += "</div>"
    }

    tooltipText += "<div id='windowAddRowBtn' style='display: " + ((current.length < maxSettings) ? "inline-block" : "none") + "' class='btn btn-success btn-md' onclick='addRow()'>+ Add Row</div>"
    tooltipText += "</div><div style='display: none' id='windowHelpContainer'>" + windowHelp + "</div>";
    costText = "<div class='maxCenter'><span class='btn btn-success btn-md' id='confirmTooltipBtn' onclick='settingsWindowSave(\"" + titleText + "\")'>Save and Close</span><span class='btn btn-danger btn-md' onclick='cancelTooltip(true)'>Cancel</span><span class='btn btn-primary btn-md' id='confirmTooltipBtn' onclick='settingsWindowSave(\"" + titleText + "\", true)'>Save</span></div>"
    game.global.lockTooltip = true;
    elem.style.display = 'block'
    elem.style.top = "10%";
    elem.style.left = "10%";
    elem.style.height = 'auto';
    elem.style.maxHeight = window.innerHeight * .85 + 'px';
    elem.style.overflowY = 'scroll';
    swapClass('tooltipExtra', 'tooltipExtraLg', elem);

    titleText = (titleText) ? titleText : titleText;
    lastTooltipTitle = titleText;

    document.getElementById("tipTitle").innerHTML = titleText;
    document.getElementById("tipText").innerHTML = tooltipText;
    document.getElementById("tipCost").innerHTML = costText;
    elem.style.display = "block";
    if (ondisplay !== null) {
        ondisplay();
    }

}

function settingsWindowSave(titleText, reopen) {

    var thisSetting = [];
    var error = "";
    var maxSettings = 30;

    for (var x = 0; x < maxSettings; x++) {

        var zone;
        var cell;
        var setting;
        var level;
        var map;
        var special;
        var gather;

        world = [0];
        zone = [0];

        //Settings

        if (titleText == 'Time Farm') {
            zone = 'Rtimefarmzone';
            cell = 'Rtimefarmcell';
            setting = 'Rtimefarmtime';
            level = 'Rtimefarmlevel';
            map = 'Rtimefarmmap';
            special = 'Rtimefarmspecial';
            gather = 'Rtimefarmgather';
        } else if (titleText == 'dTime Farm') {
            zone = 'Rdtimefarmzone';
            cell = 'Rdtimefarmcell';
            setting = 'Rdtimefarmtime';
            level = 'Rdtimefarmlevel';
            map = 'Rdtimefarmmap';
            special = 'Rdtimefarmspecial';
            gather = 'Rdtimefarmgather';
        } else if (titleText.includes('Smithy Farm')) {
            zone = 'Rsmithyfarmzone';
            cell = 'Rsmithyfarmcell';
            setting = 'Rsmithyfarmamount';
        } else if (titleText.includes('Tribute Farm')) {
            zone = 'Rtributefarmzone';
            cell = 'Rtributefarmcell';
            setting = 'Rtributefarmamount';
            level = 'Rtributefarmlevel';
            map = 'Rtributemapselection';
            special = 'Rtributespecialselection';
            gather = 'Rtributegatherselection';
        } else if (titleText == 'Shrine - U1') {
            zone = 'Hshrinezone';
            cell = 'Hshrinecell';
            setting = 'Hshrineamount';
        } else if (titleText == 'Shrine - U2') {
            zone = 'Rshrinezone';
            cell = 'Rshrinecell';
            setting = 'Rshrineamount';
        } else if (titleText == 'Shrine - U1 (Daily)') {
            zone = 'Hdshrinezone';
            cell = 'Hdshrinecell';
            setting = 'Hdshrineamount';
        } else if (titleText == 'Shrine - U2 (Daily)') {
            zone = 'Rdshrinezone';
            cell = 'Rdshrinecell';
            setting = 'Rdshrineamount';
        } else if (titleText.includes('Quagmire')) {
            zone = 'Rblackbogzone';
            setting = 'Rblackbogamount';
        } else if (titleText.includes('Insanity')) {
            zone = 'Rinsanityfarmzone';
            cell = 'Rinsanityfarmcell';
            setting = 'Rinsanityfarmstack';
            level = 'Rinsanityfarmlevel';
        } else if (titleText.includes('Alch')) {
            zone = 'Ralchfarmzone';
            cell = 'Ralchfarmcell';
            setting = 'Ralchfarmstack';
            level = 'Ralchfarmlevel';
            map = 'Ralchfarmselection';
        } else if (titleText.includes('Hypo')) {
            zone = 'Rhypofarmzone';
            cell = 'Rhypofarmcell';
            setting = 'Rhypofarmstack';
            level = 'Rhypofarmlevel';
        } else if (titleText == 'Praid') {
            zone = 'RAMPraidzone';
            cell = 'RAMPraidcell';
            setting = 'RAMPraidraid';
        } else if (titleText == 'dPraid') {
            zone = 'RdAMPraidzone';
            cell = 'RdAMPraidcell';
            setting = 'RdAMPraidraid';
        }

        var zone2 = document.getElementById('windowZone' + x);
        if (!zone2 || zone2.value == "-1") {
            continue;
        };

        zone = parseInt(document.getElementById('windowZone' + x).value, 10);

        var setting = 0;
        var level = 0;
        var map = 0;
        var special = 0;
        var gather = 0;

        if (!titleText.includes('Quagmire')) var cell = parseInt(document.getElementById('windowCell' + x).value, 10);

        if (titleText == 'Time Farm') {
            setting = document.getElementById('windowSetting' + x).value;
            level = parseInt(document.getElementById('windowLevel' + x).value, 10);
            map = document.getElementById('windowMap' + x).value;
            special = document.getElementById('windowSpecial' + x).value;
            gather = document.getElementById('windowGather' + x).value;
        } else if (titleText == 'dTime Farm') {
            setting = document.getElementById('windowSetting' + x).value;
            level = parseInt(document.getElementById('windowLevel' + x).value, 10);
            map = document.getElementById('windowMap' + x).value;
            special = document.getElementById('windowSpecial' + x).value;
            gather = document.getElementById('windowGather' + x).value;
        } else if (titleText.includes('Smithy Farm')) {
            setting = document.getElementById('windowSetting' + x).value;
        } else if (titleText.includes('Tribute Farm')) {
            setting = document.getElementById('windowSetting' + x).value;
            level = parseInt(document.getElementById('windowLevel' + x).value, 10);
            map = document.getElementById('windowMap' + x).value;
            special = document.getElementById('windowSpecial' + x).value;
            gather = document.getElementById('windowGather' + x).value;
        } else if (titleText.includes('Shrine')) {
            setting = document.getElementById('windowSetting' + x).value;
        } else if (titleText.includes('Quagmire')) {
            setting = document.getElementById('windowSetting' + x).value;
        } else if (titleText.includes('Insanity')) {
            setting = document.getElementById('windowSetting' + x).value;
            level = parseInt(document.getElementById('windowLevel' + x).value, 10);
        } else if (titleText.includes('Alch')) {
            setting = document.getElementById('windowSetting' + x).value;
            level = parseInt(document.getElementById('windowLevel' + x).value, 10);
            map = document.getElementById('windowMap' + x).value;
        } else if (titleText.includes('Hypo')) {
            setting = document.getElementById('windowSetting' + x).value;
            level = parseInt(document.getElementById('windowLevel' + x).value, 10);
        } else if (titleText == 'Praid') {
            setting = document.getElementById('windowSetting' + x).value;
        } else if (titleText == 'dPraid') {
            setting = document.getElementById('windowSetting' + x).value;
        }

        if (isNaN(zone) || zone < 6) {
            error += " Preset " + (x + 1) + " needs a value for Start Zone that's greater than 5.";
            continue;
        } else if (zone > 1000) {
            error += " Preset " + (x + 1) + " needs a value for Start Zone that's less than 1000.";
            continue;
        }
        if (zone + level < 6) {
            error += " Preset " + (x + 1) + " can\'t have a zone and map combination below zone 6.";
            continue;
        }

        if (level > 10) level = 10;
        if (!titleText.includes('Quagmire')) {
            if (cell < 1) cell = 1;
            if (cell > 100) cell = 100;
        }

        var thisThisSetting = {
            zone: zone,
            cell: cell,
            level: level,
            map: map,
            setting: setting,
            special: special,
            gather: gather
        };
        thisSetting.push(thisThisSetting);
    }

    if (!titleText.includes('Quagmire')) thisSetting.sort(function(a, b) {
        if (a.zone == b.zone) return (a.cell > b.cell) ? 1 : -1;
        return (a.zone > b.zone) ? 1 : -1
    });

    else thisSetting.sort(function(a, b) {
        if (a.zone == b.zone) return (a.zone > b.zone) ? 1 : -1
    });

    if (error) {
        var elem = document.getElementById('windowError');
        if (elem) elem.innerHTML = error;
        return;
    }

    //Reset variables that are about to get used.
    autoTrimpSettings[zone].value = [];
    if (!titleText.includes('Quagmire')) autoTrimpSettings[cell].value = [];

    //Values

    if (titleText == 'Time Farm') {
        autoTrimpSettings[level].value = [];
        autoTrimpSettings[map].value = [];
        autoTrimpSettings[setting].value = [];
        autoTrimpSettings[special].value = [];
        autoTrimpSettings[gather].value = [];
    } else if (titleText == 'dTime Farm') {
        autoTrimpSettings[level].value = [];
        autoTrimpSettings[map].value = [];
        autoTrimpSettings[setting].value = [];
        autoTrimpSettings[special].value = [];
        autoTrimpSettings[gather].value = [];
    } else if (titleText.includes('Smithy Farm')) {
        autoTrimpSettings[setting].value = [];
    } else if (titleText.includes('Tribute Farm')) {
        autoTrimpSettings[level].value = [];
        autoTrimpSettings[map].value = [];
        autoTrimpSettings[setting].value = [];
        autoTrimpSettings[special].value = [];
        autoTrimpSettings[gather].value = [];
    } else if (titleText.includes('Shrine')) {
        autoTrimpSettings[setting].value = [];
    } else if (titleText.includes('Quagmire')) {
        autoTrimpSettings[setting].value = [];
    } else if (titleText.includes('Insanity')) {
        autoTrimpSettings[level].value = [];
        autoTrimpSettings[setting].value = [];
    } else if (titleText.includes('Alch')) {
        autoTrimpSettings[level].value = [];
        autoTrimpSettings[map].value = [];
        autoTrimpSettings[setting].value = [];
    } else if (titleText.includes('Hypo')) {
        autoTrimpSettings[level].value = [];
        autoTrimpSettings[setting].value = [];
    } else if (titleText == 'Praid') {
        autoTrimpSettings[setting].value = [];
    } else if (titleText == 'dPraid') {
        autoTrimpSettings[setting].value = [];
    }

    for (var x = 0; x < thisSetting.length; x++) {
        autoTrimpSettings[zone].value[x] = thisSetting[x].zone
        if (!titleText.includes('Quagmire')) autoTrimpSettings[cell].value[x] = thisSetting[x].cell

        //Saving

        if (titleText == 'Time Farm') {
            autoTrimpSettings[level].value[x] = thisSetting[x].level
            autoTrimpSettings[map].value[x] = thisSetting[x].map
            autoTrimpSettings[setting].value[x] = thisSetting[x].setting
            autoTrimpSettings[special].value[x] = thisSetting[x].special
            autoTrimpSettings[gather].value[x] = thisSetting[x].gather
        } else if (titleText == 'dTime Farm') {
            autoTrimpSettings[level].value[x] = thisSetting[x].level
            autoTrimpSettings[map].value[x] = thisSetting[x].map
            autoTrimpSettings[setting].value[x] = thisSetting[x].setting
            autoTrimpSettings[special].value[x] = thisSetting[x].special
            autoTrimpSettings[gather].value[x] = thisSetting[x].gather
        } else if (titleText.includes('Smithy Farm')) {
            autoTrimpSettings[setting].value[x] = thisSetting[x].setting
        } else if (titleText.includes('Tribute Farm')) {
            autoTrimpSettings[level].value[x] = thisSetting[x].level
            autoTrimpSettings[map].value[x] = thisSetting[x].map
            autoTrimpSettings[setting].value[x] = thisSetting[x].setting
            autoTrimpSettings[special].value[x] = thisSetting[x].special
            autoTrimpSettings[gather].value[x] = thisSetting[x].gather
        } else if (titleText.includes('Shrine')) {
            autoTrimpSettings[setting].value[x] = thisSetting[x].setting
        } else if (titleText.includes('Quagmire')) {
            autoTrimpSettings[setting].value[x] = thisSetting[x].setting
        } else if (titleText.includes('Insanity')) {
            autoTrimpSettings[level].value[x] = thisSetting[x].level
            autoTrimpSettings[setting].value[x] = thisSetting[x].setting
        } else if (titleText.includes('Alch')) {
            autoTrimpSettings[level].value[x] = thisSetting[x].level
            autoTrimpSettings[map].value[x] = thisSetting[x].map
            autoTrimpSettings[setting].value[x] = thisSetting[x].setting
        } else if (titleText.includes('Hypo')) {
            autoTrimpSettings[level].value[x] = thisSetting[x].level
            autoTrimpSettings[setting].value[x] = thisSetting[x].setting
        } else if (titleText == 'Praid') {
            autoTrimpSettings[setting].value[x] = thisSetting[x].setting
        } else if (titleText == 'dPraid') {
            autoTrimpSettings[setting].value[x] = thisSetting[x].setting
        }

    }

    cancelTooltip(true);
    if (reopen) MAZLookalike(titleText);

    saveSettings();
    document.getElementById('tooltipDiv').style.overflowY = '';
}

function addRow() {
    for (var x = 0; x < 30; x++) {
        var elem = document.getElementById('windowZone' + x);
        if (!elem) continue;
        if (elem.value == -1) {
            var parent = document.getElementById('windowRow' + x);
            if (parent) {
                parent.style.display = 'block';
                elem.value = game.global.world + 1 < 6 ? 6 : game.global.world + 1;
                updateWindowPreset(x);
                break;
            }
        }
    }
    var btnElem = document.getElementById('windowAddRowBtn');
    for (var y = 0; y < 30; y++) {
        var elem = document.getElementById('windowZone' + y);
        if (elem && elem.value == "-1") {
            btnElem.style.display = 'inline-block';
            return;
        }
    }
    btnElem.style.display = 'none';
}

function removeRow(index) {
    var elem = document.getElementById('windowRow' + index);
    if (!elem) return;
    document.getElementById('windowZone' + index).value = -1;
    elem.style.display = 'none';
    var btnElem = document.getElementById('windowAddRowBtn');
    btnElem.style.display = 'inline-block';
}

function updateWindowPreset(index) {
    var special = document.getElementById('windowSpecial' + index);
}

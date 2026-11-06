// ==UserScript==
// @name		AutoTrimps-SadAugust_Perky&Surky
// @version		1.0-SadAugust
// @namespace	https://vincgagnon.github.io/AutoTrimps
// @description	Automate perk distributions!
// @author		grimmy, surströmming, SadAugust
// @match		*://trimps.github.io/*
// @match		*://kongregate.com/games/GreenSatellite/trimps/*
// @match		*://trimpstest510.netlify.app/*
// @connect		*://vincgagnon.github.io/AutoTrimps/*
// @connect		*://trimps.github.io/*
// @connect		self
// @grant		GM_xmlhttpRequest
// ==/UserScript==

function loadScript(id, src) {
	const script = document.createElement('script');
	script.id = id;
	script.src = `${src}?${Date.now()}`;
	script.setAttribute('crossorigin', 'anonymous');
	document.head.appendChild(script);
}

//This can be edited to point to your own Github Repository URL.
loadScript('AutoTrimps-SadAugust-PerkCalcs', 'https://vincgagnon.github.io/AutoTrimps/mods/perky.js');

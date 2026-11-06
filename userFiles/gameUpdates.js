// ==UserScript==
// @name		AutoTrimps-SadAugust_gameUpdates
// @version		1.0-SadAugust
// @namespace	https://vincgagnon.github.io/AutoTrimps
// @description	Fix minor game bugs & significantly speedup Time Warp!
// @author		SadAugust, NooNoo, Quia
// @match		*://trimps.github.io/*
// @match		*://kongregate.com/games/GreenSatellite/trimps/*
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
loadScript('AutoTrimps-SadAugust-gameUpdates', 'https://vincgagnon.github.io/AutoTrimps/mods/gameUpdates.js');

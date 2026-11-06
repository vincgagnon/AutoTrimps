// ==UserScript==
// @name		AutoTrimps-SadAugust
// @version		1.0-SadAugust
// @namespace	https://SadAugust.github.io/AutoTrimps
// @description	Automate all the trimps!
// @author		zininzinin, spindrjr, Ishkaru, genBTC, Zeker0, SadAugust
// @match		*://trimps.github.io/*
// @match		*://kongregate.com/games/GreenSatellite/trimps/*
// @match		*://trimpstest510.netlify.app/*
// @connect		*://SadAugust.github.io/AutoTrimps/*
// @connect		*://trimps.github.io/*
// @connect		self
// @connect	spiredb.tdb.fi
// @grant		GM_xmlhttpRequest
// @grant		unsafeWindow
// ==/UserScript==

/* SpireDB bridge: spiredb.tdb.fi sends no CORS header, so the game page can't read its answers directly.
   GM_xmlhttpRequest isn't bound by CORS; expose it to the page for the SpireDB buttons in the Spire. */
(function () {
	if (typeof GM_xmlhttpRequest !== 'function') return;
	const pageWindow = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
	pageWindow.atSpireDbRequest = function (body, onSuccess, onError) {
		GM_xmlhttpRequest({
			method: 'POST',
			url: 'https://spiredb.tdb.fi/query',
			data: body,
			headers: { 'Content-Type': 'text/plain' },
			timeout: 30000,
			onload: (response) => (response.status === 200 ? onSuccess(response.responseText) : onError(`SpireDB returned HTTP ${response.status}`)),
			onerror: () => onError('Could not reach spiredb.tdb.fi'),
			ontimeout: () => onError('SpireDB did not answer within 30 seconds')
		});
	};
})();


function loadScript(id, src) {
	const script = document.createElement('script');
	script.id = id;
	script.src = `${src}`;
	script.setAttribute('crossorigin', 'anonymous');
	document.head.appendChild(script);
}

offlineTimeSpeed = game.global.timeWarpLimit;
game.global.timeWarpLimit = 0;
loadScript('AutoTrimps-SadAugust', 'https://sadaugust.github.io/AutoTrimps/AutoTrimps2.js');

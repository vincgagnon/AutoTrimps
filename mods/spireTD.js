function verifyLayout(layout) {
	for (const trap of layout) {
		if (!trap) continue; /* empty cell ('0' in the layout string) */
		if (!playerSpireTraps[trap] || playerSpireTraps[trap].locked) {
			tooltip('confirm', null, 'update', 'Illegal trap layout. Try using <a href="http://swaqvalley.com/td_calc/" target="_blank">swaqs spire build calculator</a> instead.', 'cancelTooltip()', `Invalid Import`, 'Confirm');
			return false;
		}
	}
	return true;
}

function tdStringCode(inputString) {
	const trapIndexs = ['', 'Fire', 'Frost', 'Poison', 'Lightning', 'Strength', 'Condenser', 'Knowledge'];
	let s = new String(inputString.replace(/\s/g, ''));
	const index = s.indexOf('+', 0);
	s = s.slice(0, index);
	const length = s.length;

	const saveLayout = [];
	for (let i = 0; i < length; i++) {
		saveLayout.push(trapIndexs[s.charAt(i)]);
	}
	if (!verifyLayout(saveLayout)) return false;

	playerSpire['savedLayout' + -1] = saveLayout;
	if (playerSpire.runestones + playerSpire.getCurrentLayoutPrice() < playerSpire.getSavedLayoutPrice(-1)) return false;

	playerSpire.resetTraps();
	for (let x = 0; x < saveLayout.length; x++) {
		if (!saveLayout[x]) continue;
		playerSpire.buildTrap(x, saveLayout[x]);
	}
}

playerSpire.updateRsPs = function () {
	const elem = document.getElementById('playerSpireInfoTop');
	if (elem && elem.firstChild) {
		const runeStonesPS = this.getRsPs();
		elem.firstChild.innerHTML = `
	<span onmouseover='playerSpire.infoTooltip("Runestones", event)' onmouseout='tooltip("hide")'>
		Runestones: <span id='playerSpireRunestones'>${prettify(this.runestones)}</span><br/>
		Rs/s: <span id='RsPs'>${prettify(runeStonesPS)} Rs/hr ${prettify(runeStonesPS * 3600)}</span>
	</span>`;
	}
};

function _getClipboardText(ev) {
	return ev.clipboardData.getData('text/plain').replace(/\s/g, '');
}

if (typeof oldPlayerSpireDrawInfo !== 'function') {
	var oldPlayerSpireDrawInfo = playerSpire.drawInfo;
	playerSpire.drawInfo = function (arguments) {
		oldPlayerSpireDrawInfo.apply(this, arguments);
		const elem = document.getElementById('spireTrapsWindow');
		const tooltipText = `Click to paste and import your Spire string! These are typically acquired through the Spire TD Calc website`;
		if (!elem) return arguments;
		const importBtn = `<input style="width:19%;border:2px solid #dadada;padding:0.5vw;display:inline-block;margin:0.5%;text-align:center;" placeholder="Import" onpaste="tdStringCode(_getClipboardText(event));" title="${tooltipText}">`;
		const spireDbStyle = 'width:19%;border:2px solid #dadada;padding:0.5vw;display:inline-block;margin:0.5%;text-align:center;cursor:pointer;';
		const spireDbBtns = `<div style="${spireDbStyle}" onclick="spireDbBuildBest('damage')" title="Ask the SpireDB layout database (spiredb.tdb.fi, by DataBeaver) for the best known damage layout for your floors, trap upgrades, core and runestones, then build it.">SpireDB: Damage</div>` +
			`<div style="${spireDbStyle}" onclick="spireDbBuildBest('income')" title="Ask the SpireDB layout database (spiredb.tdb.fi, by DataBeaver) for the best known runestone income layout for your floors, trap upgrades, core and runestones, then build it.">SpireDB: Income</div>`;

		elem.innerHTML = importBtn + spireDbBtns + elem.innerHTML;
		return arguments;
	};
}

function _displaySpireImport() {
	const tooltipText = `Click onto and paste to import your Spire string! These are typically acquired through the <a href="http://swaqvalley.com/td_calc" target="_blank">Spire TD Calc website</a><br/><br/><textarea id='importBox' style='width: 100%' rows='5'></textarea>`;
	const costText = "<div class='maxCenter'><div id='confirmTooltipBtn' class='btn btn-info' onclick='cancelTooltip(); tdStringCode2();'>Import</div><div class='btn btn-info' onclick='cancelTooltip()'>Cancel</div></div>";

	const ondisplay = function () {
		_verticalCenterTooltip();
		document.getElementById('importBox').focus();
	};

	cancelTooltip();
	const tooltipDiv = document.getElementById('tooltipDiv');
	swapClass('tooltipExtra', 'tooltipExtraNone', tooltipDiv);
	tooltipDiv.style.left = '33.75%';
	tooltipDiv.style.top = '25%';

	game.global.lockTooltip = true;
	document.getElementById('tipText').className = '';
	document.getElementById('tipText').innerHTML = tooltipText;
	document.getElementById('tipTitle').innerHTML = 'Import Spire Settings';
	document.getElementById('tipCost').innerHTML = costText;
	tooltipDiv.style.display = 'block';
	if (typeof ondisplay === 'function') ondisplay();
}

/* SpireDB: best known layouts from DataBeaver's trimps-tools database (https://spiredb.tdb.fi, GPLv3).
   The query mirrors what spiredb.tdb.fi builds from a pasted save: floors, trap upgrade levels,
   runestone budget (owned + value of the current layout) and the equipped Spire core. */
const spireDb = {
	url: 'https://spiredb.tdb.fi/query',
	traps: '_FZPLSCK' /* SpireDB trap letters, same order as tdStringCode's digits */
};

function _spireDbUpgradeChar(level) {
	level = Number(level) || 0;
	return String.fromCharCode(level < 10 ? 48 + level : 55 + level);
}

function spireDbQueryString(queryType) {
	const t = playerSpireTraps;
	const upgrades = _spireDbUpgradeChar(t.Fire.level) + _spireDbUpgradeChar(t.Frost.level) + _spireDbUpgradeChar(t.Poison.locked ? 0 : t.Poison.level) + _spireDbUpgradeChar(t.Lightning.locked ? 0 : t.Lightning.level);
	const budget = Math.floor(playerSpire.runestones + playerSpire.getCurrentLayoutPrice());
	let query = `upg=${upgrades} f=${playerSpire.rowsAllowed} rs=${budget} ${queryType === 'income' ? 'income' : 'damage'}`;

	const core = game.global.CoreEquipped;
	if (core && typeof core.rarity !== 'undefined') {
		const modLetters = { fireTrap: 'F', poisonTrap: 'P', lightningTrap: 'L', strengthEffect: 'S', condenserEffect: 'C', runestones: 'R' };
		let coreDesc = String(core.rarity + 1);
		for (const mod of core.mods || []) {
			if (modLetters[mod[0]] && mod[1] > 0) coreDesc += `/${modLetters[mod[0]]}:${mod[1]}`;
		}
		query += ` core=${coreDesc}`;
	}
	return query;
}

function spireDbParseResponse(text) {
	text = String(text || '').trim();
	const space = text.indexOf(' ');
	const status = space < 0 ? text : text.substring(0, space);
	if (status !== 'ok') return { error: text || 'Empty answer from SpireDB' };

	const fields = {};
	for (const part of text.substring(space + 1).split(' ')) {
		const equal = part.indexOf('=');
		if (equal > 0) fields[part.substring(0, equal)] = part.substring(equal + 1);
	}
	if (!fields.t) return { error: 'SpireDB answered without a layout' };

	let digits = '';
	for (const letter of fields.t) {
		const index = spireDb.traps.indexOf(letter);
		if (index < 0) return { error: `Unknown trap letter "${letter}" in SpireDB layout` };
		digits += index;
	}
	return { fields, layoutString: `${digits}+${fields.upg}+${fields.t.length / 5}` };
}

/* Direct request first; if the browser blocks it (the server sends no CORS header), use the
   userscript bridge (GM_xmlhttpRequest) that the AutoTrimps / SpireTD userscripts expose. */
function spireDbPost(body) {
	const viaBridge = () =>
		new Promise((resolve, reject) => {
			if (typeof window.atSpireDbRequest !== 'function') {
				reject('Your browser blocked the request to spiredb.tdb.fi. Reinstall the AutoTrimps (or SpireTD) userscript from your fork so it can make the request for you.');
				return;
			}
			window.atSpireDbRequest(body, resolve, reject);
		});

	if (typeof fetch !== 'function') return viaBridge();
	return fetch(spireDb.url, { method: 'POST', body, headers: { 'Content-Type': 'text/plain' } })
		.then((response) => {
			if (!response.ok) throw new Error(`HTTP ${response.status}`);
			return response.text();
		})
		.catch(() => viaBridge());
}

function _spireDbNotice(title, text) {
	if (typeof tooltip === 'function') tooltip('confirm', null, 'update', text, 'cancelTooltip()', title, 'Confirm');
	else console.log(`${title}: ${text}`);
}

function spireDbBuildBest(queryType = 'damage') {
	if (!playerSpire || !playerSpire.rowsAllowed) return;
	const query = spireDbQueryString(queryType);
	if (typeof message === 'function') message(`Asking SpireDB for the best ${queryType} layout (${query})...`, 'Notices');

	spireDbPost(query)
		.then((text) => {
			const result = spireDbParseResponse(text);
			if (result.error) {
				_spireDbNotice('SpireDB', `SpireDB could not provide a layout: ${result.error}`);
				return;
			}
			const before = playerSpire.layout.map((cell) => (cell.trap && cell.trap.name) || '').join(',');
			const applied = tdStringCode(result.layoutString);
			const after = playerSpire.layout.map((cell) => (cell.trap && cell.trap.name) || '').join(',');
			if (applied === false && before === after) {
				_spireDbNotice('SpireDB', `SpireDB found a layout but it couldn't be built (not enough runestones or a locked trap).<br/><br/>Layout string: ${result.layoutString}`);
				return;
			}
			const f = result.fields;
			const stats = typeof prettify === 'function' ? (n) => prettify(Number(n)) : (n) => n;
			if (typeof message === 'function') message(`SpireDB ${queryType} layout built: damage ${stats(f.damage)}, ${stats(f.income)} Rs/s, cost ${stats(f.rs)} Rs. Layout: ${result.layoutString}`, 'Notices');
		})
		.catch((err) => _spireDbNotice('SpireDB', String(err && err.message ? err.message : err)));
}

/* If using standalone version then inform user it has loaded. */
if (typeof autoTrimpSettings === 'undefined' || (typeof autoTrimpSettings !== 'undefined' && typeof autoTrimpSettings.ATversion !== 'undefined' && !autoTrimpSettings.ATversion.includes('SadAugust'))) {
	console.log('The SpireTD Import mod has finished loading.');
	message('The SpireTD Import mod has finished loading.', 'Loot');
}

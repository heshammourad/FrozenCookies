// ==UserScript==
// @name           heshammourad's Frozen Cookies
// @version        github-latest
// @description    Userscript to load Frozen Cookies
// @author         Icehawk78
// @homepage       https://github.com/heshammourad/FrozenCookies
// @include        http://orteil.dashnet.org/cookieclicker/
// @include        https://orteil.dashnet.org/cookieclicker/
// @updateURL      https://heshammourad.github.io/FrozenCookies/fc_userscript_loader.user.js
// @downloadURL    https://heshammourad.github.io/FrozenCookies/fc_userscript_loader.user.js
// ==/UserScript==

// Source:    https://github.com/heshammourad/FrozenCookies/main/
// Github.io: http://heshammourad.github.io/FrozenCookies/

var loadInterval = setInterval(function () {
  const Game = unsafeWindow.Game;
  if (Game && Game.ready) {
    clearInterval(loadInterval);
    Game.LoadMod("https://heshammourad.github.io/FrozenCookies/frozen_cookies.js");
  }
}, 1000);

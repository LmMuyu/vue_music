"use strict";

var _require = require("electron"),
    globalShortcut = _require.globalShortcut;

exports.shortcut = function (win) {
  globalShortcut.register("ctrl+j", function () {
    win.webContents.openDevTools();
  });
};
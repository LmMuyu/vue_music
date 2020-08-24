let { globalShortcut } = require("electron");

exports.shortcut = win => {
  globalShortcut.register("ctrl+j", () => {
    win.webContents.openDevTools();
  });
};

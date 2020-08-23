"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _electron = require("electron");

var _lib = require("vue-cli-plugin-electron-builder/lib");

var _electronDevtoolsInstaller = _interopRequireWildcard(require("electron-devtools-installer"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var isDevelopment = process.env.NODE_ENV !== "production";
var win;

_electron.protocol.registerSchemesAsPrivileged([{
  scheme: "app",
  privileges: {
    secure: true,
    standard: true
  }
}]);

function createWindow() {
  win = new _electron.BrowserWindow({
    width: 1200,
    height: 600,
    frame: false,
    webPreferences: {
      nodeIntegration: true
    },
    show: false,
    backgroundColor: "#2e2c29",
    resizable: false
  });

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
    if (!process.env.IS_TEST) win.webContents.openDevTools();
  } else {
    (0, _lib.createProtocol)("app");
    win.loadURL("app://./index.html");
  } //关闭应用


  win.on("closed", function () {
    win = null;
  });
  win.once("ready-to-show", function () {
    win.show();
  });
}

_electron.app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    _electron.app.quit();
  }
}); //应用从后台进入前台


_electron.app.on("activate", function () {
  if (win === null) {
    createWindow();
  }
}); //应用启动


_electron.app.on("ready", function _callee() {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(isDevelopment && !process.env.IS_TEST)) {
            _context.next = 9;
            break;
          }

          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap((0, _electronDevtoolsInstaller["default"])(_electronDevtoolsInstaller.VUEJS_DEVTOOLS));

        case 4:
          _context.next = 9;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](1);
          console.error("Vue Devtools failed to install:", _context.t0.toString());

        case 9:
          _context.next = 11;
          return regeneratorRuntime.awrap(createWindow());

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 6]]);
});

if (isDevelopment) {
  if (process.platform === "win32") {
    process.on("message", function (data) {
      if (data === "graceful-exit") {
        _electron.app.quit();
      }
    });
  } else {
    process.on("SIGTERM", function () {
      _electron.app.quit();
    });
  }
}

_electron.ipcMain.on("miniMize", function () {
  win.minimize();
});

_electron.ipcMain.on("close", function () {
  console.log(123);
  win.close();
});
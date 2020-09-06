import { app, protocol, BrowserWindow, ipcMain } from "electron";
import { createProtocol } from "vue-cli-plugin-electron-builder/lib";
import installExtension, { VUEJS_DEVTOOLS } from "electron-devtools-installer";
const isDevelopment = process.env.NODE_ENV !== "production";

const { shortcut } = require("./electron/globalShortcut");

let win;

protocol.registerSchemesAsPrivileged([
  { scheme: "app", privileges: { secure: true, standard: true } }
]);

function createWindow() {
  win = new BrowserWindow({
    width: 1200,
    height: 600,
    frame: false,
    webPreferences: {
      nodeIntegration: true
    },
    show: false,
    backgroundColor: "#1a1e1f"
  });

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
    if (!process.env.IS_TEST) win.webContents.openDevTools();
  } else {
    createProtocol("app");
    win.loadURL("app://./index.html");
  }

  //关闭应用
  win.on("closed", () => {
    win = null;
  });

  win.once("ready-to-show", () => {
    win.show();
  });
}

app.whenReady().then(() => {
  //全局快捷键
  shortcut(win);

  installExtension(VUEJS_DEVTOOLS)
    .then(name => console.log(`Added Extension:  ${name}`))
    .catch(err => console.log("An error occurred: ", err));
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

//应用从后台进入前台
app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});

//应用启动
app.on("ready", async () => {
  await createWindow();
});

if (isDevelopment) {
  if (process.platform === "win32") {
    process.on("message", data => {
      if (data === "graceful-exit") {
        app.quit();
      }
    });
  } else {
    process.on("SIGTERM", () => {
      app.quit();
    });
  }
}

ipcMain.on("miniMize", () => {
  win.minimize();
});

ipcMain.on("close", () => {
  win.close();
});

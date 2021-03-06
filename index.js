const electron = require("electron");
const url = require("url");
const path = require("path");
const config = require("./config.json");

const { app, BrowserWindow } = electron;
const screenElectron = electron.screen;
const { shell } = require("electron");

process.env.GOOGLE_API_KEY = config.GOOGLE_API_KEY;
process.env.GOOGLE_DEFAULT_CLIENT_ID = config.GOOGLE_DEFAULT_CLIENT_ID;
process.env.GOOGLE_DEFAULT_CLIENT_SECRET = config.GOOGLE_DEFAULT_CLIENT_SECRET;

function createWindow() {
  // Create the browser window
  const mainScreen = screenElectron.getPrimaryDisplay();
  const dimensions = mainScreen.size;
  const screenWidth = dimensions.width;
  const screenHeight = dimensions.height;

  const main = new BrowserWindow({
    width: Math.round(screenWidth * 0.224),
    height: Math.round(screenHeight * 0.41),
    x: -10,
    y: 50,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  main.setAlwaysOnTop(true, "screen");

  // and load the main html file of the app
  main.loadFile("index.html");
  main.removeMenu();

  const voiceSearch = new BrowserWindow({
    parent: main,
    width: Math.round(screenWidth * 0.15),
    height: Math.round(screenHeight * 0.2),
    x: 750,
    y: 0,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  voiceSearch.loadFile("stt.html");
  voiceSearch.removeMenu();
}

function openSearchBar() {
  shell.openPath(__dirname + "\\macros\\search.ahk");
}

app.whenReady().then(createWindow).then(openSearchBar);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

const electron = require("electron");
const url = require("url");
const path = require("path");

const { app, BrowserWindow, session, Notification } = electron;
const screenElectron = electron.screen;
const { shell } = require("electron");

process.env.GOOGLE_API_KEY = "AIzaSyACQx7kQgtV15J_pPocYkfXMzybSWyi0rE";
process.env.GOOGLE_DEFAULT_CLIENT_ID =
  "743803874255-80hrq581c76aj80alhbeujn829lmudrp.apps.googleusercontent.com";
process.env.GOOGLE_DEFAULT_CLIENT_SECRET = "HuaySQwKp0bQnNjbg4Cq7hht";

let main;
let voiceSearch;

function createWindow() {
  // Create the browser window
  const mainScreen = screenElectron.getPrimaryDisplay();
  const dimensions = mainScreen.size;
  const screenWidth = dimensions.width;
  const screenHeight = dimensions.height;

  console.log(screenWidth);
  console.log(screenHeight);
  const main = new BrowserWindow({
    width: Math.round(screenWidth * 0.21),
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

  const voiceSearch = new BrowserWindow({
    parent: main,
    width: Math.round(screenWidth * 0.18),
    height: Math.round(screenHeight * 0.3),
    x: 600,
    y: 50,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  voiceSearch.loadFile("stt.html");
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

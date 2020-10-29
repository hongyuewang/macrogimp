const electron = require("electron");
const url = require("url");
const path = require("path");

const { app, BrowserWindow } = electron;
const screenElectron = electron.screen;

function createWindow() {
  // Create the browser window
  const mainScreen = screenElectron.getPrimaryDisplay();
  const dimensions = mainScreen.size;
  const screenWidth = dimensions.width;
  const screenHeight = dimensions.height;

  console.log(screenWidth);
  console.log(screenHeight);
  const win = new BrowserWindow({

    width: Math.round(screenWidth * 0.21),
    height: Math.round(screenHeight * 0.41),
    x:-10,
    y:50,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  win.setAlwaysOnTop(true, "screen");

  // and load the main html file of the app
  win.loadFile("index.html");
}

/*var child = require("child_process").execFile;
var executablePath =
  app.getPath("appData").replace("\\Roaming", "") +
  "\\Local\\LilySpeechApp\\LilySpeech\\assets\\engine\\LilySpeech64-1.exe";

child(executablePath, function (err, data) {
  if (err) {
    console.error(err);
    return;
  }

  console.log(data.toString());
});*/

app.whenReady().then(createWindow);

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

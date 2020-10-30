const { shell } = require('electron');

function openMacro(className) {
    shell.openPath( __dirname +  "\\macros\\" + className + ".ahk");
}
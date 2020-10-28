const { shell } = require('electron');

function openPaint() {
    shell.openPath( __dirname +  "\\macros\\paint.ahk");
}
const {shell} = require('electron');
const notifier = require("node-notifier");
const path = require("path");

function openMacro(className) {
    shell.openPath( __dirname +  "\\macros\\" + className + ".ahk");

    uLabel(className);

    notifier.notify(
      {
        title: "You have selected:",
        message: className,
        sound: true, // Only Notification Center or Windows Toasters
        wait: true,
      },
      function (err, response) {
        // Response is response from notification
      }
    );

    notifier.on("click", function (notifierObject, options) {
      console.log("You clicked on the notification");
    });

    notifier.on("timeout", function (notifierObject, options) {
      console.log("Notification timed out!");
    });
         
}


function uLabel(className) {
  var x = document.getElementById("selectScreen");
  x.innerHTML = className;
}

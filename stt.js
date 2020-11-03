const { shell } = require("electron");

function runSpeechRecognition() {
  // Get the ouput div reference
  let output = document.getElementById("output");

  // Get the acion div reference
  let action = document.getElementById("action");

  // Create a new speech recognition object
  var SpeechRecognition = webkitSpeechRecognition;
  let recognition = new SpeechRecognition();

  // This runs when the speech recognition service starts
  recognition.onstart = function () {
    action.innerHTML = "<small>Listening...</small>";
  };

  recognition.onspeechend = function () {
    action.innerHTML = "<small>Stopped listening.</small>";
    recognition.stop();
  };

  // This runs when the speech recognition service returns result
  recognition.onresult = function (event) {
    var transcript = event.results[0][0].transcript;
    var confidence = event.results[0][0].confidence;
    output.innerHTML = transcript;
    output.classList.remove("hide");

    output.select();
    output.setSelectionRange(0, 99999);
    document.execCommand("copy");
    pasteInSearchBar();
  };

  // start recognition
  recognition.start();
}

function pasteInSearchBar() {
  shell.openPath(__dirname + "\\macros\\paste.ahk");
}

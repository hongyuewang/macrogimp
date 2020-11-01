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
    action.innerHTML = "<small>listening, please speak...</small>";
  };

  recognition.onspeechend = function () {
    action.innerHTML = "<small>stopped listening, hope you are done...</small>";
    recognition.stop();
  };

  // This runs when the speech recognition service returns result
  recognition.onresult = function (event) {
    var transcript = event.results[0][0].transcript;
    var confidence = event.results[0][0].confidence;
    output.innerHTML =
      "<b>Text:</b> " +
      transcript +
      "<br/> <b>Confidence:</b> " +
      confidence * 100 +
      "%";
    output.classList.remove("hide");
  };

  // start recognition
  recognition.start();
}


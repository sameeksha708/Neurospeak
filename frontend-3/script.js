function goTo(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
}

function selectCommand(text) {
  document.getElementById('outputText').innerText = text;
  goTo('output');
}

function speakText() {
  let text = document.getElementById('outputText').innerText;
  let speech = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(speech);
}
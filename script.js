function goToScreen(screenId) {
  const screens = document.querySelectorAll('.screen');
  screens.forEach(s => {
    s.classList.remove('active');
  });

  // small timeout ensures CSS transition triggers
  setTimeout(() => {
    document.getElementById(screenId).classList.add('active');
  }, 20);
}

function showOutput(text) {
  document.getElementById('outputText').innerText = text;
  goToScreen('output');
}

function playSpeech() {
  let text = document.getElementById('outputText').innerText;
  let speech = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(speech);
}
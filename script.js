/* function goToScreen(screenId) {
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
} */
/* slightly modified */

function goToScreen(screenId) {
  const screens = document.querySelectorAll('.screen');
  screens.forEach(s => {
    s.classList.remove('active');
  });

  // small timeout ensures CSS transition triggers
  setTimeout(() => {
    const targetScreen = document.getElementById(screenId);
    targetScreen.classList.add('active');

    // If it's the output screen, auto-play the speech
    if (screenId === 'output') {
      playSpeech();
    }
  }, 20);
}

function showOutput(text) {
  document.getElementById('outputText').innerText = text;
  goToScreen('output');  // playSpeech() will be triggered here automatically
}

function playSpeech() {
  let text = document.getElementById('outputText').innerText;

  // Stop any ongoing speech before starting new
  speechSynthesis.cancel();

  if (text.trim() !== "") {
    let speech = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(speech);
  }
}

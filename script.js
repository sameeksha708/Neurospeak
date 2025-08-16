let selectedCommand = null;

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

function playSpeech() {
  let text = document.getElementById('outputText').innerText;
  let speech = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(speech);
}

function selectCommand(command, event) {
  selectedCommand = command;

  // remove selection from all
  document.querySelectorAll('#menu .cmd-btn').forEach(btn => btn.classList.remove('selected'));

  // add to clicked one
  event.target.classList.add('selected');
}


function confirmSelection(isYes) {
  if (isYes && selectedCommand) {
    document.getElementById('outputText').innerText = selectedCommand;
    goToScreen('output');
    playSpeech();
  } else {
    // Reset selection if NO
    selectedCommand = null;
    document.querySelectorAll('#menu .cmd-btn').forEach(btn => btn.classList.remove('selected'));
  }
}

let timer;
let timeLeft = 1500; // 25 minutes in seconds
let isRunning = false;

const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    startButton.textContent = 'Pause';
    timer = setInterval(() => {
      timeLeft--;
      if (timeLeft < 0) {
        clearInterval(timer);
        timeLeft = 0;
        isRunning = false;
        startButton.textContent = 'Start';
        alert('Time is up!');
      }
      updateTimerDisplay();
    }, 1000);
  } else {
    clearInterval(timer);
    isRunning = false;
    startButton.textContent = 'Start';
  }
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  startButton.textContent = 'Start';
  timeLeft = 1500;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  timerDisplay.textContent = display;
}

startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);

updateTimerDisplay(); // Update initial display

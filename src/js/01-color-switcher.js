function getRandomHexColor() {
  return Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0);
}

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bgColor = document.querySelector('body');

stopBtn.setAttribute('disabled', true);

let timerId = null;

const onClickStart = startBtn.addEventListener('click', () => {
  if (timerId) {
    return;
  }
  timerId = setInterval(handleClickStart, 1000);
});

const onClickStop = stopBtn.addEventListener('click', handleClickStop);

function handleClickStart() {
  bgColor.style.backgroundColor = `#${getRandomHexColor()}`;

  startBtn.setAttribute('disabled', true);
  stopBtn.removeAttribute('disabled');
}

function handleClickStop() {
  clearInterval(timerId);
  bgColor.style.backgroundColor = '';
  timerId = null;

  stopBtn.setAttribute('disabled', true);
  startBtn.removeAttribute('disabled');
}

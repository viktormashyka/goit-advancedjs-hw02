import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

let countdown = 0;
let timeObject = {};
let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    countdown = selectedDates[0] - Date.now();

    if (countdown < 0) {
      alert('Please choose a date in the future');
      return;
    }

    elements.startBtn.removeAttribute('disabled');
  },
};

flatpickr('#datetime-picker', options);

const elements = {
  startBtn: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

elements.startBtn.setAttribute('disabled', true);

elements.startBtn.addEventListener('click', () => {
  if (timerId) {
    return;
  }
  timerId = setInterval(handleClickStart, 1000);
});

function handleClickStart() {
  if (countdown < 1000) {
    clearInterval(timerId);
  }
  timeObject = millisecondsToTime(countdown);
  countdown -= 1000;

  elements.days.textContent = timeObject.getDays;
  elements.hours.textContent = timeObject.getHours;
  elements.minutes.textContent = timeObject.getMinutes;
  elements.seconds.textContent = timeObject.getSeconds;
}

function millisecondsToTime(ms) {
  let getSeconds = Math.floor((ms / 1000) % 60);
  let getMinutes = Math.floor((ms / (1000 * 60)) % 60);
  let getHours = Math.floor((ms / (1000 * 60 * 60)) % 24);
  let getDays = Math.floor(ms / (1000 * 60 * 60 * 24));

  const pad = num => num.toString().padStart(2, '0');

  return {
    getDays: pad(getDays),
    getHours: pad(getHours),
    getMinutes: pad(getMinutes),
    getSeconds: pad(getSeconds),
  };
}

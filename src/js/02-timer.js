import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let countdown = 0;
let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    countdown = selectedDates[0] - Date.now();

    if (countdown < 0) {
      iziToast.error({
        theme: 'red',
        position: 'topRight',
        message: 'Please choose a date in the future',
      });
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
  const { days, hours, minutes, seconds } = convertMs(countdown);
  countdown -= 1000;

  const addLeadingZero = value => value.toString().padStart(2, '0');

  elements.days.textContent = addLeadingZero(days);
  elements.hours.textContent = addLeadingZero(hours);
  elements.minutes.textContent = addLeadingZero(minutes);
  elements.seconds.textContent = addLeadingZero(seconds);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

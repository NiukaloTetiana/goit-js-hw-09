import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  input: document.querySelector('#datetime-picker'),
  timesData: document.querySelectorAll('.value'),
  startBtn: document.querySelector('[data-start]'),
};

refs.startBtn.disabled = true;

let intervalId = null;
let selectedDate;
let now;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0];
    console.log(selectedDate);
    now = new Date().getTime();
    if (selectedDate > now) {
      refs.startBtn.disabled = false;
      Notiflix.Notify.success('Date in future');
    } else {
      Notiflix.Notify.failure('Please choose a date in the future');
    }
  },
};

flatpickr(refs.input, options);

refs.startBtn.addEventListener('click', () => {
  refs.startBtn.disabled = true;
  refs.input.disabled = true;

  intervalId = setInterval(() => {
    const nowTime = selectedDate.getTime() - new Date().getTime();
    if (nowTime <= 1000) {
      clearInterval(intervalId);
    }
    const timer = convertMs(nowTime);
    Object.entries(timer).forEach(([, value], index) => {
      refs.timesData[index].textContent = addLeadingZero(value);
      console.log(index);
    });
  }, 1000);

  function addLeadingZero(value) {
    return String(value).padStart(2, 0);
  }
});

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

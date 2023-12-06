function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};

let timerId = null;

refs.startBtn.addEventListener('click', () => {
  timerId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  refs.startBtn.setAttribute('disabled', 'disabled');
  refs.stopBtn.removeAttribute('disabled');
});

refs.stopBtn.addEventListener('click', () => {
  refs.startBtn.removeAttribute('disabled');
  refs.stopBtn.setAttribute('disabled', 'disabled');
  clearInterval(timerId);
});

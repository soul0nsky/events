export default function endGame() {
  const timer = document.getElementById('timer');
  timer.textContent = 5;

  setInterval(() => {
    timer.textContent -= 1;
    if (Number(timer.textContent) === 0) {
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    }
  }, 1000);
}

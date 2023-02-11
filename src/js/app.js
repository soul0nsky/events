import gobImg from '../img/goblin.png';

function onLoad() {
  const field = document.querySelector('.field');

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const divElem = document.createElement('div');
      divElem.classList.add('elem');
      divElem.dataset.id = (4 * i) + j + 1;
      field.appendChild(divElem);
    }
  }
}
document.addEventListener('DOMContentLoaded', onLoad);

function addImg(targetsArr, curr) {
  const img = document.createElement('img');
  img.classList.add('img-target');
  img.src = gobImg; // ../src/img/goblin.png ./img/goblin.png goblin.png
  targetsArr[curr].appendChild(img);
}

function removeTarget() {
  const target = document.querySelector('.img-target');
  if (target) {
    target.remove();
  }
}

function endGame() {
  const timer = document.getElementById('timer');
  timer.textContent = 5;

  setInterval(() => {
    timer.textContent--;
    if (Number(timer.textContent) === 0) {
      location.reload();
    }
  }, 1000);
}

function addTarget() {
  let prevTargetId;
  const btnStop = document.querySelector('.btn-stop');

  const intervalID = setInterval(() => {
    removeTarget();

    const targets = document.querySelectorAll('.elem');
    let curr = Math.floor(Math.random() * targets.length);

    if (prevTargetId && curr === prevTargetId - 1) {
      if (curr === targets.length - 1) {
        curr -= 2;
      }
      curr += 1;
    }

    addImg(targets, curr);

    prevTargetId = Number(targets[curr].dataset.id);
  }, 1000);

  // кнопка остановки игры и автоматическая перезагрузка страницы
  function stopGame(interval) {
    removeTarget();
    clearInterval(interval);
    endGame();
  }

  btnStop.addEventListener('click', () => stopGame(intervalID));
}

addTarget();

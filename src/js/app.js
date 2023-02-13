import './renderField.js';
import endGame from './endGame.js';
import goblinImg from '../img/goblin.png';
import GameLogic from '../components/gameLogic/GameLogic.js';

const gameLogic = new GameLogic('.main-container');

function addImgTarget(targetsArr, curr) {
  const img = document.createElement('img');
  img.classList.add('img-target');
  img.src = goblinImg;
  targetsArr[curr].appendChild(img);
}

function removeTarget() {
  const target = document.querySelector('.img-target');
  if (target) {
    target.remove();
  }
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

    addImgTarget(targets, curr);

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

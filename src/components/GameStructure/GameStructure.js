import goblinImg from '../../img/goblin.png';

export default class GameStructure {
  constructor(container) {
    this.addImgTarget = this.addImgTarget.bind(this);
    this.endGame = this.endGame.bind(this);

    this.container = document.querySelector(container);

    this.field = this.container.querySelector('.field');
    this.btnStop = this.container.querySelector('.btn-stop');
    this.targets = [];

    this.interval = null;
    console.log(this.interval);
    this.btnStop.addEventListener('click', () => this.endGame(this.interval));
  }

  fieldRender() {
    for (let i = 0; i < 4; i += 1) {
      for (let j = 0; j < 4; j += 1) {
        const divElem = document.createElement('div');
        divElem.classList.add('elem');
        divElem.dataset.id = (4 * i) + j + 1;
        this.targets.push(divElem);
        this.field.appendChild(divElem);
      }
    }
  }

  addImgTarget(targetsArr, curr) {
    const img = document.createElement('img');
    img.classList.add('img-target');
    img.src = goblinImg;
    targetsArr[curr].appendChild(img);
  }

  removeTarget() {
    const target = document.querySelector('.img-target');
    if (target) {
      target.remove();
    }
  }

  addTarget() {
    let prevTargetId;

    this.interval = setInterval(() => {
      this.removeTarget();
      let curr = Math.floor(Math.random() * this.targets.length);

      if (prevTargetId && curr === prevTargetId - 1) {
        if (curr === this.targets.length - 1) {
          curr -= 2;
        }
        curr += 1;
      }

      this.addImgTarget(this.targets, curr);
      prevTargetId = Number(this.targets[curr].dataset.id);
    }, 1000);
  }

  endTimer() {
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

  endGame(interval) {
    this.removeTarget();
    clearInterval(interval);
    this.endTimer();
  }
}

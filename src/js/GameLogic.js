import hummerImg from '../img/hammer2.png';
import bangImg from '../img/flash-bang.png';
import audioKick from '../audio/udar.mp3';
import missKick from '../audio/haha.mp3';

export default class GameLogic {
  constructor(element) {
    this.onClickItem = this.onClickItem.bind(this);

    this.element = document.querySelector(element);
    this.points = this.element.querySelector('#points');
    this.misses = this.element.querySelector('#misses');

    this.element.addEventListener('click', this.onClickItem);
  }

  onClickItem(e) {
    const imgTarget = e.target.classList.contains('img-target');
    const boxTarget = e.target.classList.contains('elem');

    if (imgTarget) {
      e.target.style.cursor = `url(${hummerImg}), auto`;
      this.points.textContent = Number(this.points.textContent) + 1;
      e.target.src = `${bangImg}`;

      const audio = new Audio(audioKick);
      audio.play();

      setTimeout(() => {
        e.target.style.cursor = 'default';
        e.target.remove();
      }, 250);
    }

    if (boxTarget) {
      const audio = new Audio(missKick);

      if (Number(this.misses.textContent) >= 4) {
        this.misses.textContent = 0;
        this.points.textContent = 0;
        audio.play();

        alert('Конец игры');
      } else {
        this.misses.textContent = Number(this.misses.textContent) + 1;
        audio.play();
      }

      e.target.style.backgroundColor = 'rgb(253, 137, 183)';
      setTimeout(() => {
        e.target.style.backgroundColor = 'rgb(146, 239, 255)';
      }, 300);
    }
  }
}

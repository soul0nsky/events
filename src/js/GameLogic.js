import hummerImg from '../img/hammer2.png';

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

      setTimeout(() => {
        e.target.style.cursor = 'default';
      }, 250);
    }

    if (boxTarget) {
      if (Number(this.misses.textContent) >= 4) {
        this.misses.textContent = 0;
        this.points.textContent = 0;
        alert('Конец игры');
      } else {
        this.misses.textContent = Number(this.misses.textContent) + 1;
      }

      e.target.style.backgroundColor = 'rgb(253, 137, 183)';
      setTimeout(() => {
        e.target.style.backgroundColor = 'rgb(146, 239, 255)';
      }, 300);
    }
  }
}

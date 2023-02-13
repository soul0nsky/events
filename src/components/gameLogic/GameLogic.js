export default class GameLogic {
  constructor(element) {
    this.onClickItem = this.onClickItem.bind(this);

    this.element = document.querySelector(element);
    this.points = this.element.querySelector('#points');

    this.element.addEventListener('click', this.onClickItem);
  }

  onClickItem(e) {
    const imgTarget = e.target.classList.contains('img-target');
    const boxTarget = e.target.classList.contains('elem');

    if (imgTarget) {
      this.points.textContent = Number(this.points.textContent) + 1;
    }

    if (boxTarget) {
      e.target.style.backgroundColor = 'rgb(253, 137, 183)';

      setTimeout(() => {
        e.target.style.backgroundColor = 'rgb(146, 239, 255)';
      }, 300);
    }
  }
}

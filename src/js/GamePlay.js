/* eslint-disable no-undef */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import chekchar from "./CheckChar";
export default class GamePlay {
  constructor() {
    this.boardSize = 4;
    this.container = null;
    this.boardEl = null;
    this.cells = [];
    this.randomPre = null;
  }

  bindToDOM(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('container is not HTMLElement');
    }
    this.container = container;
  }
  drawUi() {
    this.checkBinding();
    this.container.innerHTML = `
      <div class="board-container">
        <div data-id="board" class="board"></div>
      </div>
    `;

    this.boardEl = this.container.querySelector('[data-id=board]');

    for (let i = 0; i < this.boardSize ** 2; i += 1) {
      const cellEl = document.createElement('div');
      cellEl.classList.add('cell', 'map-tile');
      this.boardEl.appendChild(cellEl);
      const charEl = document.createElement('div');
      charEl.classList.add('cell', 'map-tile', 'char');
      this.boardEl.children[i].appendChild(charEl);
    }
    this.cells = Array.from(this.boardEl.children);
  }

  redrawPositions() {
    function getRandomIntInclusive(min, max, isk) {
      min = Math.ceil(min);
      max = Math.floor(max);
      let result = Math.floor(Math.random() * (max - min + 1)) + min;
      if (result != isk) {
        return result
      } else {
        return getRandomIntInclusive(min, max, isk)
      }
    }
    setInterval(() => {
      let random = getRandomIntInclusive(0, 15, this.randomPre);
      this.cells[random].children[0].classList.add('character')
      setTimeout(() => {
        this.cells[random].children[0].classList.remove('character')
      }, 1000);
      this.randomPre = random
    }, 1200);
  }
  checkBinding() {
    if (this.container === null) {
      throw new Error('GamePlay not bind to DOM');
    }
  }
 
}

/* eslint-disable no-unused-vars */
import chekchar from "./CheckChar";


export default class GameController {
  constructor(gamePlay) {
    this.gamePlay = gamePlay;
    this.score = 0;
  }
  init() {
    this.gamePlay.drawUi()
    this.gamePlay.redrawPositions()
    chekchar()
  }

}

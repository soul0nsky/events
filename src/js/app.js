import GameStructure from './GameStructure';
import GameLogic from './GameLogic';

const gameStructure = new GameStructure('.main-container');
const gameLogic = new GameLogic('.main-container');

gameStructure.fieldRender();
gameStructure.addTarget();

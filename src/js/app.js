import GameStructure from '../components/GameStructure/GameStructure.js';
import GameLogic from '../components/GameLogic/GameLogic.js';

const gameStructure = new GameStructure('.main-container');
const gameLogic = new GameLogic('.main-container');

gameStructure.fieldRender();
gameStructure.addTarget();

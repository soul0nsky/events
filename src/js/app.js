import GameStructure from '../components/GameStructure/GameStructure';
import GameLogic from '../components/GameLogic/GameLogic';

const gameStructure = new GameStructure('.main-container');
const gameLogic = new GameLogic('.main-container');

gameStructure.fieldRender();
gameStructure.addTarget();

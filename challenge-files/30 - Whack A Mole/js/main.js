import { moles, startButton } from './modules/page-elements.js';
import { bonk, startGame } from './modules/game-lib.js';

moles.forEach(mole => mole.addEventListener('click', bonk));
startButton.addEventListener('click', startGame);
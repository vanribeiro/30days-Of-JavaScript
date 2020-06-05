import { buttons, customForm} from './modules/page-elements.js';
import {startTimer, customTimer} from './modules/timer-lib.js';

buttons.forEach(button => button.addEventListener('click', startTimer));
customForm.addEventListener('submit', customTimer);
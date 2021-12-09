import './style.scss';
import { displayTasks, userWatcher } from './modules/crud.js';
import checkboxListener from './modules/util.js';

displayTasks();
userWatcher(displayTasks);
checkboxListener();
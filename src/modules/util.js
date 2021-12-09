import { toggleStatues, getTaskId } from './taskCheck.js';

export default function checkboxListener() {
  document.addEventListener('click', (e) => {
    if (e.target.type === 'checkbox') {
      const taskId = getTaskId(e);
      toggleStatues(taskId);
    }
  });
}

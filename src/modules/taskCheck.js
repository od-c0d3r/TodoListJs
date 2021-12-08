import { getTasksFromLocalStorage, setTasksToLocalStorage } from '../../test/helper.js';

export function toggleStatues(taskId) {
  const list = getTasksFromLocalStorage();
  list[taskId - 1].comp = !list[taskId - 1].comp;
  setTasksToLocalStorage(list)
  return list;
}

function getTaskId(e) {
  return e.target.getAttribute('data-id');
}

export default function checkboxListener() {
  document.addEventListener('click', (e) => {
    if (e.target.type === 'checkbox') {
      const taskId = getTaskId(e);
      toggleStatues(taskId);
    }
  });
}

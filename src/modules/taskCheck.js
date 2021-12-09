import { getTasksFromLocalStorage, setTasksToLocalStorage } from '../../test/helper.js';

export function toggleStatues(taskId) {
  const list = getTasksFromLocalStorage();
  list[taskId - 1].comp = !list[taskId - 1].comp;
  setTasksToLocalStorage(list);
  return list[taskId - 1];
}

export function getTaskId(e) {
  return e.target.getAttribute('data-id');
}

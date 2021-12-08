export function getTasksFromLocalStorage() {
  return JSON.parse(localStorage.getItem('list')) || [];
}

export function setTasksToLocalStorage(list) {
  localStorage.setItem('list', JSON.stringify(list));
  return true;
}
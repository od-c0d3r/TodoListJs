export function getTasksFromLocalStorage() {
  return JSON.parse(localStorage.getItem('list')) || [];
}

export function setTasksToLocalStorage(list) {
  localStorage.setItem('list', JSON.stringify(list));
  return true;
}

export function getElem() {
  return document.getElementById('list');
}

export function createItems() {
  const [listItem, checkbox, taskData, taskBtn] = ['div', 'input', 'span', 'button'].map((item) => document.createElement(item));
  return {
    listItem,
    checkbox,
    taskData,
    taskBtn,
  };
}
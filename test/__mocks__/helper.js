import jsdom from 'jsdom';
const { JSDOM } = jsdom;
const { document } = (new JSDOM(`<!DOCTYPE html>`)).window;

export function getTasksFromLocalStorage() {
  return [
  {
    desc: 'Task 1',
    comp: false,
    index: 1,
  },
  {
    desc: 'Task 2',
    comp: true,
    index: 2,
  },
  {
    desc: 'Task 3',
    comp: true,
    index: 3,
  }
];
}

export function setTasksToLocalStorage(arr) {
  return { list: arr };
}


export function getElem() {
  document.body.innerHTML = `<div id='list'>check</div>`
  return document.getElementById('list');
}

export function createItems() {
  const [listItem, checkbox, taskData, taskBtn] = ['div', 'input', 'span', 'button'].map((item) => document.createElement(item));
  return { 
    listItem,
    checkbox,
    taskData,
    taskBtn
  }
}
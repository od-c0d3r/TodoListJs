import './style.scss';
import checkboxListener from './modules/taskCheck.js';

const list = [{
  desc: 'This is the area where you should name your Task',
  comp: false,
  index: 0,
},
{
  desc: 'Task 2',
  comp: false,
  index: 1,
},
{
  desc: 'Task 3',
  comp: false,
  index: 2,
}];

function setTasksToLocalStorage() {
  localStorage.setItem('list', JSON.stringify(list));
  return true;
}

function getTasksFromLocalStorage() {
  const list = JSON.parse(localStorage.getItem('list'));
  return list == null ? [] : list;
}

function displayTasks() {
  const list = getTasksFromLocalStorage();
  const container = document.getElementById('list');
  container.innerHTML = '';

  if (list.length === 0) {
    container.innerHTML = 'List is empty';
  } else {
    list.forEach((task, index, list) => {
      const listItem = document.createElement('div');
      const checkbox = document.createElement('input');
      const taskData = document.createElement('span');
      const taskBtn = document.createElement('button');

      taskData.innerText = `${task.desc}`;
      checkbox.type = 'checkbox';
      checkbox.setAttribute('data-id', list.indexOf(task));
      taskBtn.setAttribute('data-id', list.indexOf(task));
      taskBtn.style.cssFloat = 'right';
      taskBtn.className = 'taskBtn';
      taskBtn.innerText = ':';

      listItem.className = 'listItem';
      listItem.append(checkbox, taskData, taskBtn);
      container.append(listItem);
    });
  }
}

setTasksToLocalStorage();
displayTasks();
checkboxListener();

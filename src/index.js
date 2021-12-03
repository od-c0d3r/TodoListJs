import './style.scss';

import {hi,hi2} from './modules/taskCheck'

hi();
hi2();

const list = [{
  desc: 'This is the area where you should name your Task',
  comp: false,
  index: 0,
},
{
  desc: 'Task 2',
  comp: false,
  index: 0,
},
{
  desc: 'Task 3',
  comp: true,
  index: 0,
}];

function displayTasks() {
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

      checkbox.type = 'checkbox';
      taskData.innerText = `${task.desc}`;
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

displayTasks();

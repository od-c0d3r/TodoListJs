import './style.scss';
import checkboxListener from './modules/taskCheck.js';

function setTasksToLocalStorage(list) {
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
    container.innerHTML = '💭 Add somthing you wanna finish today 💭';
  } else {
    list.forEach((task, index, list) => {
      const listItem = document.createElement('div');
      const checkbox = document.createElement('input');
      const taskData = document.createElement('span');
      const taskBtn = document.createElement('button');

      taskData.innerText = `${task.desc}`;
      checkbox.type = 'checkbox';
      if (task.comp === true) {
        checkbox.checked = true;
      } else {
        checkbox.checked = false;
      }
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

displayTasks();
checkboxListener();

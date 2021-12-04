import './style.scss';
import checkboxListener from './modules/taskCheck.js';
import userWatcher from './modules/crud.js';

// function setTasksToLocalStorage(list) {
//   localStorage.setItem('list', JSON.stringify(list));
//   return true;
// }

function getTasksFromLocalStorage() { // import it from crud.js
  const list = JSON.parse(localStorage.getItem('list'));
  return list == null ? [] : list;
}

function displayTasks() {
  const list = getTasksFromLocalStorage();
  const container = document.getElementById('list');
  container.innerHTML = '';

  if (list.length === 0) {
    container.innerHTML = '💭 Add somthing you wanna finish today 💭';
    container.classList.add('emptyList');
  } else {
    container.classList.remove('emptyList');
    list.forEach((task, index, list) => {
      const listItem = document.createElement('div');
      const checkbox = document.createElement('input');
      const taskData = document.createElement('span');
      const taskBtn = document.createElement('button');

      taskData.innerText = `${task.desc}`;
      taskData.className = 'listSpan';
      checkbox.type = 'checkbox';
      if (task.comp === true) {
        checkbox.checked = true;
      } else {
        checkbox.checked = false;
      }
      listItem.setAttribute('data-id', list.indexOf(task) + 1);
      checkbox.setAttribute('data-id', list.indexOf(task) + 1);
      taskBtn.setAttribute('data-id', list.indexOf(task) + 1);
      taskBtn.style.cssFloat = 'right';
      taskBtn.className = 'taskBtn';
      taskBtn.innerText = ':';

      listItem.className = 'listItem';
      listItem.append(checkbox, ' ', taskData, taskBtn);
      container.append(listItem);
    });
  }
}

displayTasks();
checkboxListener();
userWatcher(displayTasks);
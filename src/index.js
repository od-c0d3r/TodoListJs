import './style.scss';
import checkboxListener from './modules/taskCheck.js';
import { userWatcher } from './modules/crud.js';
import { getTasksFromLocalStorage } from './modules/helper.js';

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
      const [listItem, checkbox, taskData, taskBtn] = ['div', 'input', 'span', 'button'].map((item) => document.createElement(item));

      taskData.innerText = `${task.desc}`;
      taskData.className = 'listSpan';
      checkbox.type = 'checkbox';
      if (task.comp === true) {
        checkbox.checked = true;
      } else {
        checkbox.checked = false;
      }
      [listItem, checkbox, taskBtn].forEach((element) => element.setAttribute('data-id', list.indexOf(task) + 1));
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
import './style.scss';
import checkboxListener from './modules/taskCheck.js';
import { userWatcher } from './modules/crud.js';
import { getTasksFromLocalStorage, getElem, createItems } from '../test/helper.js';

export default function displayTasks() {
  const list = getTasksFromLocalStorage();
  const container = getElem();
  container.innerHTML = '';

  if (list.length === 0) {
    container.innerHTML = '💭 Add somthing you wanna finish today 💭';
    container.classList.add('emptyList');
  } else {
    container.classList.remove('emptyList');
    list.forEach((task, index, list) => {
      const { listItem, checkbox, taskData, taskBtn}= createItems();
      taskData.innerHTML = `${task.desc}`;
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
      container.appendChild(listItem)
    });
  }
  return container
}


// displayTasks();
// checkboxListener();
// userWatcher(displayTasks);
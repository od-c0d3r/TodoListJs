let editFlag = false;
let editElement = '';

export function getTasksFromLocalStorage() {
  const list = JSON.parse(localStorage.getItem('list'));
  return list == null ? [] : list;
}

function setTasksToLocalStorage(list) {
  localStorage.setItem('list', JSON.stringify(list));
  return true;
}

function add(text) {
  const list = getTasksFromLocalStorage();
  list.push({
    desc: text,
    comp: false,
    index: list.length + 1,
  });
  setTasksToLocalStorage(list);
  return list;
}

function edit(id, text) {
  const list = getTasksFromLocalStorage();
  list[id - 1].desc = text;
  setTasksToLocalStorage(list);
  return list;
}

function remove(id) {
  const list = getTasksFromLocalStorage();
  list.splice(id - 1, 1);
  setTasksToLocalStorage(list);
  return list;
}

function clearCompleted() {
  const list = getTasksFromLocalStorage();
  const curatedList = list.filter((task) => task.comp === false);
  setTasksToLocalStorage(curatedList);
  return list;
}

function showEditInput(div) {
  editFlag = true;
  editElement = div;
  const editInput = document.createElement('div');
  const trashIcon = document.createElement('span');

  trashIcon.id = 'removeBtn';
  trashIcon.innerHTML = '🗑️';
  trashIcon.setAttribute('data-id', div.getAttribute('data-id'));

  editInput.innerHTML = `
    <form id="editForm" style="display: inline-block; width: 96%;">
      <input id="editInput" class="taskTextInputStyle" type="text" data-id="${div.getAttribute('data-id')}" value="${div.innerText.match(/[A-Za-z0-9\s]/g).join('')}" name="taskTextInput" required>
    </form>${trashIcon.outerHTML}`;
  div.replaceWith(editInput);
}

function hideEditInput() {
  editFlag = false;
  if (document.getElementById('editForm').parentElement) {
    document.getElementById('editForm').parentElement.replaceWith(editElement);
  }
}

function checkEditFlag() {
  if (editFlag === true) {
    hideEditInput();
  }
}

export function userWatcher(displayTasks) {
  document.addEventListener('submit', (e) => {
    if (e.target.id === 'editForm') {
      const desc = document.getElementById('editInput').value;
      const id = e.target.elements[0].getAttribute('data-id');
      edit(id, desc);
      e.target.reset();
      displayTasks();
      e.preventDefault();
    } else {
      const desc = document.getElementById('taskTextInput').value;
      add(desc);
      e.target.reset();
      displayTasks();
      e.preventDefault();
    }
  });
  document.addEventListener('click', (e) => {
    if (e.target.className === 'listItem' || e.target.className === 'listSpan') {
      checkEditFlag();
      if (e.target.className === 'listItem') {
        showEditInput(e.target);
      } else {
        showEditInput(e.target.parentElement);
      }
    } else if (e.target.id === 'removeBtn') {
      remove(e.target.getAttribute('data-id'));
      displayTasks();
    } else if (e.target.id === 'clearBtn') {
      clearCompleted();
      displayTasks();
    }
  });
  document.addEventListener('dblclick', () => {
    checkEditFlag();
  });
}

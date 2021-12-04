let editFlag = false;
let editElement = '';

function getTasksFromLocalStorage() {
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

function remove(params) {

}

function clearAll(params) {

}

function showEditInput(div) {
  editFlag = true;
  editElement = div;
  const editInput = document.createElement('div');
  editInput.innerHTML = `
    <div>
        <form id="editForm">
            <input id="editInput" class="taskTextInputStyle" type="text" data-id="${div.getAttribute('data-id')}" value="${div.innerText.slice(0, -1)}" name="taskTextInput" required>
        </form>
    </div>`;
  div.replaceWith(editInput);
}

function hideEditInput() {
  editFlag = false;
  const div = document.getElementById('editForm').parentElement;
  div.replaceWith(editElement);
}

function checkEditFlag() {
  if (editFlag === true) {
    hideEditInput();
  }
}

export default function userWatcher(displayTasks) {
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
    }
  });
  document.addEventListener('dblclick', () => {
    checkEditFlag();
  });
}

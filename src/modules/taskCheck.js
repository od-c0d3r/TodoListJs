function toggleStatues(taskId) {
  const list = JSON.parse(localStorage.getItem('list'));
  list[taskId - 1].comp = !list[taskId - 1].comp;
  localStorage.setItem('list', JSON.stringify(list));
}

function getTaskId(e) {
  return e.target.getAttribute('data-id');
}

export default function checkboxListener() {
  document.addEventListener('click', (e) => {
    if (e.target.type === 'checkbox') {
      const taskId = getTaskId(e);
      toggleStatues(taskId);
    }
  });
}

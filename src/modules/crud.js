function getTasksFromLocalStorage() {
    const list = JSON.parse(localStorage.getItem('list'));
    return list == null ? [] : list;
}

function setTasksToLocalStorage(list) {
    localStorage.setItem('list', JSON.stringify(list));
    return true;
}

function add(text) {
    let list = getTasksFromLocalStorage();
    list.push({
        desc: text,
        comp: false,
        index: list.length+1
    })
    setTasksToLocalStorage(list);
    return list;
}

function edit(params) {
    
}

function remove(params) {
    
}

function clearAll(params) {
    
}

export default function userWatcher(displayTasks) {
    document.addEventListener('submit', (e) => {
        let desc = document.getElementById('taskTextInput').value;
        add(desc);
        e.target.reset();
        displayTasks();
        e.preventDefault();
    });
    document.addEventListener('dblclick', (e) => {
        if (e.target.className == 'listItem' || e.target.className == 'listSpan') {
            console.log(e);
        }
    });
  }
  
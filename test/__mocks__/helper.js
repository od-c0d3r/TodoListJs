export function getTasksFromLocalStorage() {
  return [{
    desc: 'Task 1',
    comp: false,
    index: 1,
  },
  {
    desc: 'Task 2',
    comp: true,
    index: 1,
  }];
}

export function setTasksToLocalStorage(arr) {
  return { list: arr };
}

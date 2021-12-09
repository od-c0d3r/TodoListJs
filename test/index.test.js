import { toggleStatues } from '../src/modules/taskCheck.js'
import { add, remove, edit, clearCompleted } from '../src/modules/crud.js';
import { getTasksFromLocalStorage, setTasksToLocalStorage } from './__mocks__/helper.js';
import { displayTasks } from '../src/index.js';

import jsdom from 'jsdom';
const { JSDOM } = jsdom;
const { document } = (new JSDOM(`<body>MOCKED DOM</body>`)).window;

jest.mock('./helper.js');

describe('Add and Remove', () => {
  test('add function which returns an array', () => {
    const task = 'Write Code';
    const arr = getTasksFromLocalStorage();
    const obj = {
      desc: `${task}`,
      comp: false,
      index: arr.length + 1,
    };

    add(task);
    const result = add(task);

    const second = add(task)[3];
    expect(setTasksToLocalStorage(arr)).toEqual({ list: arr });
    expect(result).toEqual([...arr, obj]);
    expect(result.length).toBe(4);
    expect(result[3].index).toBe(4);
    expect(second).toEqual(obj);
    expect(typeof (result)).toEqual('object');
    expect(typeof (result[0].comp)).toEqual('boolean');
    expect(typeof (result[0].index)).toEqual('number');
  });

  test('deletes a task obj from array', () => {
    const expected = [{
      desc: 'Task 2',
      comp: true,
      index: 2,
    },
    {
      desc: 'Task 3',
      comp: true,
      index: 3,
    }];
    const result = remove(1);
    expect(result).toEqual(expected);
    expect(typeof result).toBe('object');
    expect(result.length).toEqual(2);
  });
});

describe('Edit and Update', () => {
  const id = 1;
  test('edits a task object description', () => {
    const text = 'new desc';
    const expected = {
      desc: text,
      comp: false,
      index: 1
    };
    const result = edit(id, text);
    const beforeEdit = getTasksFromLocalStorage()[0].desc;
    const afterEdit = result.desc
    expect(result).toEqual(expected);
    expect(beforeEdit !== afterEdit).toBeTruthy();
    expect(typeof result).toEqual('object');
  })

  test('updates the status of the completed', () => {
    const expected = {
      desc: 'Task 1',
      comp: true,
      index: 1
    }
    const result = toggleStatues(id)
    const beforeChange = getTasksFromLocalStorage()[0].comp;
    const afterChange = result.comp
    expect(result).toEqual(expected)
    expect(beforeChange).toBeFalsy()
    expect(afterChange).toBeTruthy()
    expect(beforeChange !== afterChange).toBeTruthy()
    expect(typeof afterChange).toBe('boolean')
  })
});

describe('Clear All Btn', () => {
  test('clear all objects with completed attribute', () => {
    let expected = [{
      desc: 'Task 1',
      comp: false,
      index: 1,
    }]
  
    let result = clearCompleted()
    expect(result).toEqual(expected)
    expect(result.length).toEqual(1)
    expect(typeof result).toBe('object')
    expect(result[0].comp).toBe(false);
  })
});

describe('DOM manipulations', ()=>{
  test('displayTasks()', ()=>{
    document.body.innerHTML = `<div id='list'></div>`
    console.log(document.body.innerHTML);
  })
})


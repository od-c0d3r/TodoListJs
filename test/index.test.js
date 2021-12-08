import { add, remove, edit, clearCompleted } from '../src/modules/crud.js';
import {toggleStatues} from '../src/modules/taskCheck.js'
import { getTasksFromLocalStorage, setTasksToLocalStorage } from './__mocks__/helper.js';

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

    const second = add(task)[1];
    expect(setTasksToLocalStorage(arr)).toEqual({ list: arr });
    expect(result).toEqual([arr[0], obj]);
    expect(result.length).toBe(2);
    expect(result[1].index).toBe(2);
    expect(second).toEqual(obj);
    expect(typeof (result)).toEqual('object');
    expect(typeof (result[0].comp)).toEqual('boolean');
    expect(typeof (result[0].index)).toEqual('number');
  });

  test('deletes a task obj from array', () => {
    const expected = [];
    const result = remove(1);
    expect(result).toEqual(expected);
    expect(typeof result).toBe('object');
    expect(result.length).toEqual(0);
  });
});

describe('Edit and Update', () => {
  const id = 1;
  test('edits a task object description', () => {
    const text = 'new desc';
    const expected = [{
      desc: text,
      comp: false,
      index: 1
    }];
    const result = edit(id, text);
    const beforeEdit= getTasksFromLocalStorage()[0].desc;
    const afterEdit = result[0].desc
    expect(result).toEqual(expected);
    expect(beforeEdit!==afterEdit).toBeTruthy();
    expect(typeof result).toEqual('object');
  })

  test('updates the status of the completed', ()=> {
    const expected = [{
      desc: 'Task 1',
      comp: true,
      index: 1
    }]
    const result = toggleStatues(id)
    const beforeChange =  getTasksFromLocalStorage()[0].comp;
    const afterChange = result[0].comp
    expect(result).toEqual(expected)
    expect(beforeChange).toBeFalsy()
    expect(afterChange).toBeTruthy()
    expect(beforeChange !== afterChange).toBeTruthy()
    expect(typeof afterChange).toBe('boolean')
  })
});

describe('clear all objects with completed attribute',()=>{
  let expected = toggleStatues(2)

  let result = clearCompleted()
  expect(result).toEqual(expected)
})
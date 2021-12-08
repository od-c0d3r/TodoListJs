import { add, remove } from './crud.js';
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

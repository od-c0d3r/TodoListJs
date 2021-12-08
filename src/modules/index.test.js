jest.mock('./crud.js')
import { add } from "./crud";
import {getTasksFromLocalStorage,setTasksToLocalStorage } from './crudMock'

test('test', ()=>{
    let arr = [1,2,3,4]
    let obj = {list: [1,2,3]}
    
    expect(getTasksFromLocalStorage()).toEqual([]);
    expect(setTasksToLocalStorage(arr)).toEqual({list: arr});
    expect(add('HEllo')).toEqual([{desc: 'HEllo', comp: false, index: 1}])
});

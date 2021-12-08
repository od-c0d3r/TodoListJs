jest.mock('./helper.js');
import { add } from "./crud";
import { getTasksFromLocalStorage, setTasksToLocalStorage } from './__mocks__/helper.js';

describe('Add and Remove', ()=> {
    test('add function which returns an array', ()=>{
        let task = "Write Code";
        let arr = getTasksFromLocalStorage();
        let obj = {
            desc: `${task}`,
            comp: false,
            index: arr.length + 1
        };
    
        const result = add(task);
        
        expect(getTasksFromLocalStorage()).toEqual([]);
        expect(setTasksToLocalStorage(arr)).toEqual({list: arr});
        expect(result).toEqual([obj])
        expect(result.length).toBe(1)
        expect(typeof(result)).toEqual('object')
        expect(typeof(result[0].comp)).toEqual('boolean')
        expect(typeof(result[0].index)).toEqual('number')
    });
    
})

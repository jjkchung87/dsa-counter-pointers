// add whatever parameters you deem necessary
/*
function call twoArrayObject accepts two arrays, arr1 and arr2. The function outputs an object that's keys are the elementse from arr1, and the values are the arr2.
If there are more keys than values, then all the keys that dont' have a value will have a value of null.
If there are more values than keys, any values that don't have a key are ignored.
Keys and values can be any data type.

inputs: arr1, arr2
output: object

Examples:

twoArrayObject([1,2,3],['a','b','c']) => {1:'a', 2:'b', 3:'c'}
twoArrayObject([1,2,3],['a','b']) => {1:'a', 2:'b', 3:null}
twoArrayObject([1,2,3],['a','b','c','d','e']) => {1:'a', 2:'b', 3:'c'}
twoArrayObject([1,2,3]) => undefined

time complexity: O(n)

assumptions:
- there will only be one of each key in arr1


*/
function twoArrayObject(arr1, arr2) {
    // instantiate return object, obj
    const obj = {};
    //loop through length of arr1
    for(let i=0; i < arr1.length; i++){
        //assign each key and corresponding value to the obj or null if correspoding value doesn't exist
        obj[arr1[i]] = arr2[i] || null;
    }
    
    return obj;

}

module.exports = twoArrayObject

// add whatever parameters you deem necessary
/*

countPairs accepts two arguments: an array of integers and a number.
The function checks to see how many pairs of numbers from the array sum up to the number.
No duplicate values in the array.
If no pairs, return 0


input: array of integers (nums), number (num)
output: number

variables:
- count: number of pairs


time complexity: O(n log(n)) or o(n)

*/

function sumMapHelper(nums, num){

    const sumMap = new Map();

    for(let n of nums){
        let diff = num - n ;
        if(diff !== n) sumMap.set(diff, n)
    }

    return sumMap
}


function countPairs(nums, num) {
    
    if(nums.length === 0) return 0;
    let count = 0;
    const sumMap = sumMapHelper(nums,num);
    
    for(let n of sumMap.keys()){
        let delta = sumMap.get(n)
        if(sumMap.has(delta)){
            count++;
            sumMap.delete(delta)
        }
    }

    return count;

}

module.exports = countPairs;
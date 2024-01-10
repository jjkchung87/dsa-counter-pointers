// add whatever parameters you deem necessary

/*

longestFall accepts an array of integers, nums, and returns a number indicating the longest sequence of numbers that are declining.
If nums is empty, return 0.

input: array of numbers, num
output: number

examples:

longestFall([5,4,3,7,8]) => 3
longestFall([5,4,3,7,8,7,6,5,4,3,2]) => 7
longestFall([]) => 0

[5,4,3]

5 0 1 
4 2 2
3 3 3

[5,4,5, 4, 3]

longest: 2

  S  End
5 0   1
4 1   2
5 2   1
4 1   2
3 2   3

5 1 2
4 2 3
5 3 0 1
4 1 2
3 2 3




*/
function longestFall(nums) {

    if(nums.length===0) return 0;
    let longest = 1;
    let count = 1;
    let previousVal = null;

    for(let num of nums){
        if(num === previousVal || num > previousVal) {
            if(count > longest) longest = count;
            count = 0;
        }
        count++;
        previousVal = num;
    }

    if(count > longest) longest = count;
        
    return longest;
}



module.exports = longestFall;



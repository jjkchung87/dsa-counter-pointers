// add whatever parameters you deem necessary
/*

the function accepts an array of numbers, nums.
it finds the pivot index, which is the index in the array where the numbers to the left of it equal the sum of the numbers to its right.
if there are multiple pivot points, it will return the smallest index.
If no pivot index is found, it returns -1

intput: array of numbers
output: number of pivotIndex

variables:
pivotIndex: starts at -1, is replaced with the pivotindex and is returned value

assumptions:
numbers can repeat (can't use map)
numbers are not sorted (can't use multiple pointers)

examples:
pivotIndex([1,2,5,-3,6]) => 2
pivotIndex([-1,3,-3,2]) => 1
pivotIndex([1,2,3]) => -1

time-complexity = o(n)



  [1, 2,5,3,0]
C: 0
R: 11-1=10

C: 1
R: 11-2-1=8

C: 3
R: 11-5-3=3



   [1,2,3]
C: 0
R: 6-1 = 5

C: 1
R: 6-2-1=2

C: 3
R: 6-3-3 = 0

totalsum = 6

use reduce function to get total sum
totalSum = 11

iterate through array and calculate the running sum (elements visited less the current element) and the remaining sum
if the running sum === remaining sum, found a pivotIndex


[0,-1,-1,1]



*/



function pivotIndex(nums) {
    if (nums.length === 0) return -1;

    let totalSum = nums.reduce((acc, n) => acc + n, 0);
    let runningSum = 0;

    for (let i = 0; i < nums.length; i++) {
        let remainingSum = totalSum - runningSum - nums[i];
        if (remainingSum === runningSum) {
            return i;
        }
        runningSum += nums[i];
    }

    return -1;
}


module.exports = pivotIndex;
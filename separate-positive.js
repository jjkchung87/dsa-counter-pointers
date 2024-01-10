/*
function separatePositive accepts an array of non-zero integers and returns an array with all the positive numbers on the left side of the array, and all the negative numbers to the rigt. Numbers don't need to be ordered.
Problem must be done in place
time-complexity: O(n)

input: array of nums
output: array of nums

examples:
separatePositive([-1,-2,3,1]) => [3,1,-1,-2]
separatePositive([-1,-2,-3]) => [-1,-2,-3]
separatePositive([1,2,3]) => [1,2,3]


*/

// add whatever parameters you deem necessary
// function separatePositive(nums) {
//     //create left with value of 0;
//     const left = 0;
//     //create right with value of nums.length - 1;
//     const right = nums.length -1;

//     //while left < right
//     while(left < right){
//         //if left is negative && right is negative --> right--
//         if(nums[left] < 0 && nums[right] < 0) {
//             right--;
//         } else 
//         //if left is positive && right is positive --> left++
//         if(nums[left] > 0 && nums[right] > 0) {
//             left++;
//         } else
//         //if left is positive && right is negative
//         if(nums[left] > 0 && nums[right] < 0) {
//             //left ++
//             //right --
//             left++;
//             right--;
//         } else
//         //if left is negatie && right is positive
//         if(nums[left] < 0 && nums[right] > 0){
//             //temp equal left
//             //left equal right
//             //right equal temp
//             //left ++
//             //right --

//             let temp = nums[left]
//             nums[left] = nums[right]
//             nums[right] = temp
//             left++
//             right--
//         }
//     }
        
//     //return nums
//     return nums;

// }
function separatePositive(nums) {
    let left = 0;
    let right = nums.length -1;

    while(left < right){
        if(nums[left] < 0 && nums[right] < 0) {
            right--;
        } else if(nums[left] > 0 && nums[right] > 0) {
            left++;
        } else if(nums[left] > 0 && nums[right] < 0) {
            left++;
            right--;
        } else if(nums[left] < 0 && nums[right] > 0){
            let temp = nums[left]
            nums[left] = nums[right]
            nums[right] = temp
            left++
            right--
        }
    }
        
    //return nums
    return nums;

}

module.exports = separatePositive;
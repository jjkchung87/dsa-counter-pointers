// add whatever parameters you deem necessary
/*
function averagePaid accepts an array of numbers, and a number, num. It checks if two numbers in the array when averaged, equates to the num. If so, return true. Otherwise returns false.

input: array of numbers, num. number, num
output: true or false

examples:

averagePair([1,2,3],2.5) => true
averagePair([1,2,3],4) => false
averagePair([],1) => false
averagePair([-2,0,1,2],0) => true
averagePair([1,2,3]) => false

*/

function averagePair(nums, num) {
    //if nums.length === 0 or !num return false
    if(nums.length === 0 || !num) return false;
    //pointer, left, starting at 0
    let left = 0;
    //pointer, right, starting at nums.length - 1
    let right = nums.length - 1;
    //while left is less than right
    while(left < right){
        //if average of left and right === num, return true
        if((nums[left] + nums[right])/2 === num) {
            return true;
        //else
        } else {
            //if average of left and right < num, left++
            if((nums[left] + nums[right])/2 < num){
                left++;
            } else{
            //if average of left and right > num, right-
            right--;
            }
        }
    }

    // return false
    return false;

}

module.exports = averagePair

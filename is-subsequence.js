// add whatever parameters you deem necessary

/*
function isSubsequence accepts two strings, str1 and str2. It checks to see if str1 is a sub-sequence of str2.
Specifically, str1 needs to appear in str2 in the same sequence of characters as they appear in str1, but can be separated by other characters.

examples:
isSubsequence('hi','ha i') => true
isSubsequence('hi','ih') => false
isSubsequence('hii','hahahhiaai') => true

time complexity: O(n+m)
*/


function isSubsequence(str1, str2) {
    if(!str2) return false;
    
    const arr1 = str1.split("")
    const arr2 = str2.split("")
    
    if(arr1.length > arr2.length) return false;

    //instantiate variable idx = 0
    let idx = 0;
    //loop char of arr2
    for(let char of arr2){
        //if char === arr1[idx]
        if(char === arr1[idx]) idx++;
        if(idx === arr1.length) return true;
    }
    
    //else return false    
    return false;

}

module.exports = isSubsequence
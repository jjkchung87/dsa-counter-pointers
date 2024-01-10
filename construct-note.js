// add whatever parameters you deem necessary


/*
function accepts a string 'message' and string 'letters' in that order.
function checks to see if the message can be composed from the letters.
can assume both strings will only have lowercase letters, no numbers, spaces, or special characters

input: two string (message and letter)
output: true if the message can be composed by some or all of the letters. otherwise, return false.

variables:
    "letterMap": map of each letter and their count
    "messageMap": map of each letter from message and their count

Exmaples:
constructNode("hi","ih") => true
constructNode("hi","i") => false
constructNode("hi") => false
constructNode(12,"ih") => false

*/

function charMapHelper(string){
    const charMap = new Map();

    for(let char of string){
        let charCount = charMap.get(char) || 0
        charMap.set(char,charCount + 1)
    }
    
    
    return charMap;

}


function constructNote(message, letters) {
    
    if(letters === "") return false;
    if(message === "") return true;
    //create map for message with count of each letter within it
    //create map for letters with count of each letter within it
    
    const messageMap = charMapHelper(message);
    const lettersMap = charMapHelper(letters);

    
    //loop over each letter in messageMap and 
    for(let char of messageMap.keys()){
        //if letterMap does not include that letter return false
        if(!lettersMap.has(char)) return false;
        //if letterMap includes the letter but its value is less than messageMap, return false
        if(lettersMap.get(char) < messageMap.get(char)) {
            console.log(`lettersMap has fewer "${char}" than messageMap`)
            return false;
        }
    }
        
    // otherwise return true
    return true;
   
}

module.exports = constructNote

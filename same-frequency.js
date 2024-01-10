// add whatever parameters you deem necessary
/*

function sameFrequency accepts two numbers, num1 and num2. it checks to see if both numbers have the same frequency of digits, and returns true if so, and false otherwise.
inputs: num1, number. num2, number.
output: boolean

examples:
sameFrequency(123,321) => true
sameFrequency(123,322) => false
sameFrequency(123,32) => false
sameFrequency(123) => false

*/

function makeDigitsMap(num){
    const digitsMap = new Map();

    let digits = num.toString().split('')
    for(let digit of digits){
        let digitValue = digitsMap.get(digit) || 0;
        digitsMap.set(digit, digitValue + 1)
    }

    return digitsMap;
}


function sameFrequency(num1, num2) {
    if(!num2) return false;
    const num1Map = makeDigitsMap(num1);
    const num2Map = makeDigitsMap(num2);

    //loop over num1Map's keys
    for(let key of num1Map.keys()){
        //if key not in num2Map retuen false;
        if(!num2Map.has(key)) return false;
        //if value of key in num1Map not equal to value of key in num2Map, return false;
        if(num1Map.get(key) !== num2Map.get(key)) return false;
    }

    // return true;
    return true;
    
}

module.exports = sameFrequency;

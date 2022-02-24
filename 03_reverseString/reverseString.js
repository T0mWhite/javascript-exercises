const reverseString = function(str) {
    let splitStr = str.split('');
    let revArray = splitStr.reverse();
    let joinArray = revArray.join('');
    return joinArray;
};


reverseString('hello');
// Do not edit below this line
module.exports = reverseString;

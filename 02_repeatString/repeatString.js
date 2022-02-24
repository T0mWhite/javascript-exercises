const repeatString = function (str, num) {
  if (num < 0) {
    return 'ERROR';
  } else {
    let i = 0;
    while (i <= num || num === '') {
      return str.repeat(num);
    } i++
  }
};

// Do not edit below this line
module.exports = repeatString;

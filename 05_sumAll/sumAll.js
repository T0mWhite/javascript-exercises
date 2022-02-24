const sumAll = function (lowEnd, highEnd) {
  let lowEndParam = lowEnd;
  let highEndParam = highEnd;
  let numList = [];

  if (lowEndParam < 0 || highEndParam < 0) {
    return 'ERROR';
  } else if (typeof lowEndParam !== 'number' || typeof highEndParam !== 'number') {
    return 'ERROR';
  } else {
    if (lowEndParam > highEndParam) {
      lowEnd = highEndParam;
      highEnd = lowEndParam;
    }

    for (let i = lowEnd; i <= highEnd; i++) {
      numList.push(i);
    }

    console.log(numList);
    let sum = 0;
    for (let j = 0; j < numList.length; j++) {
      sum += numList[j];
    }
    console.log(sum);

    return sum;
  }
};

sumAll(1, 4);

// Do not edit below this line
module.exports = sumAll;

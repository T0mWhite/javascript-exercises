const removeFromArray = function(array, ...nums) {
  let i = 0;
  while (i < array.length) {
    let j = 0;
    while (j < nums.length) {
      if (array[i] === nums[j]) {
        array.splice(i, 1);
        i--;

      }
      j++;

    }
    i++;

} return array;
};

// Do not edit below this line
module.exports = removeFromArray;

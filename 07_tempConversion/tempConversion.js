const ftoc = function(far) {
  let cels = (far - 32) * (5/9);
  cels = Math.round(cels * 10) / 10;
  return cels;
};

const ctof = function(cels) {
  let far = cels * (9/5) + 32;
  far = Math.round(far * 10) / 10;
  return far;
};


// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

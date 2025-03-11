const fibonacci = function(a) {
  a = +a;
  if (a < 0 || !Number.isInteger(a)){
    return "OOPS"
  }
  let result = [0];
  if (a > 0 && Number.isInteger(a)){
    result[1] = 1;
    for (let i = 2; i <= a; i++) {
      result[i] = result[i-1] + result[i-2]
    }
  }
  return result[a];
};

// Do not edit below this line
module.exports = fibonacci;

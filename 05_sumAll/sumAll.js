const sumAll = function(...args) {
  let result = 0;
  for (let i = 0; i < args.length; i++) {
    if (args[i] <= 0 || !Number.isInteger(args[i]) || typeof args[i] !== "number") {
      return "ERROR";
    }
  }
  if (args[0] <= args[1]) {
    for (let i = args[0]; i <= args[1]; i++) {
      result += i;
    }
  } else {
    for (let i = args[1]; i <= args[0]; i++) {
      result += i;
    }
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;

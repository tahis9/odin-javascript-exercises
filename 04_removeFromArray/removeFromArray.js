const removeFromArray = function(array, ...args) {
  let result = [];
  outer: for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < args.length; j++) {
      if (array[i] === args[j]) {
        continue outer;
      }
    }
    result.push(array[i]);
  }
  return result;
};

// Do not edit below this line
module.exports = removeFromArray;

const repeatString = function(string, times) {
  result = '';
  if (times < 0) {
    result += "ERROR";
  } else {;
    for (let i = 1; i <= times; i++) {
      result += string;
    }
  }
  return result;
};



// Do not edit below this line
module.exports = repeatString;

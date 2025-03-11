const palindromes = function (input) {
  inputFiltered = input.replace(/[^\p{L}\p{N}\s]/gu, '').replace(/\s/g,'').toLowerCase();
  backwards = inputFiltered.split("").reverse().join("");
  return inputFiltered === backwards;
};

// Do not edit below this line
module.exports = palindromes;

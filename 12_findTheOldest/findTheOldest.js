const findTheOldest = function(arr) {
  arr.forEach((obj) => {
    if (!obj.yearOfDeath){
      obj.yearOfDeath = (new Date()).getFullYear();
    }
  });

  let sortedByAge = arr.sort((a,b)=>(b.yearOfDeath-b.yearOfBirth) - (a.yearOfDeath-a.yearOfBirth));
  return sortedByAge[0]
};

// Do not edit below this line
module.exports = findTheOldest;

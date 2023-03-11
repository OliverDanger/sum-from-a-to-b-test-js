

function sum(fromN, toN) {
  if (fromN === toN) {
    return fromN;
  }

  return fromN + sum(fromN + 1, toN);

}

// Make sum a recursive function that sums all the whole numbers from fromN to toN.

// So if we called the function with the following values: sum(3, 7), it would sum 3 + 4 + 5 + 6 + 7 and output 25.

// For this exercise, we can safely assume that fromN will always be less than or equal to toN.


//testing

console.log('returned:',sum(2, 20));

module.exports = sum;

function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  if(fromN === toN) {
    return fromN;
  } else {
    return fromN + sum(fromN + 1, toN);
  }
  
}

console.log(sum(3, 7));
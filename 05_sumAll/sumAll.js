const sumAll = function(start, end) {
    let sum = 0;
    if (start > end) {
        [start, end] = [end, start];
      }
    if (start < 0 || end <0 ) {
        return 'ERROR';
      }
      if (!Number.isInteger(start) || !Number.isInteger(end)) { 
        return 'ERROR';
    }
    if (typeof start !== 'number' || typeof end !== 'number') {
        return 'ERROR';
    }
    for (let i = start; i <= end; i++) {
      sum += i;
      }
    
    return sum;
  }   


// create new arraw with the in between numbers
// 
// Do not edit below this line
module.exports = sumAll;

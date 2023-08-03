
function solution(A) {
  let ret = 0;
  let isLastChangePositive = undefined;
  let lastChangedIdx = 0;
  for (let x = 0; x <= A.length - 1; x++) {
    // not first element
    if (x > 0) {
      // flat
      if (A[x] === A[x - 1]) {
        // at the end of the array
        if (x === A.length - 1) {
          // XXX: why increment here?
          ret += 1;
        }
        continue;
      } else {
        // step down
        if (A[x] < A[x - 1]) {
          // end of array
          if (x === A.length - 1) {
            // valley
            ret += 1;
          // if we stepped up last, we've
          // identified a hill
          } else if (isLastChangePositive) {
            // hill
            ret += 1;
          }
          isLastChangePositive = false;
          lastChangedIdx = x;
        } else { // step up
          // end of array
          if (x === A.length - 1) {
            // hill
            ret += 1;
          } else if (!isLastChangePositive && isLastChangePositive !== undefined) {
            // last change down, not at end, and we've stepped up currently?
            // XXX: why tho
            ret += 1;
          }
          isLastChangePositive = true;
          lastChangedIdx = x;
        }
      }
    } else { // first element
      // flat start
      if (A[x] === A[x + 1]) {
        continue;
      } else {
        // if not flat start, either a hill or valley
        // either way, increment
        ret += 1;
      }
    }
    

  }
  return ret;
}


const arr1 = [2, 2, 3, 4, 3, 3, 2, 2, 1, 1, 2, 5];
const arr2 = [ -1, -1];
const arr3 = [3, 3, 3, 3, 3];
const arr4 = [1, 2, 3, 4, 5];

console.log(solution(arr1));
console.log(solution(arr2));
console.log(solution(arr3));
console.log(solution(arr4));
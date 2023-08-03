
/**
 * @param { number[] } A
 * @return { {start: number, end: number, type: "hill" | "valley"}[] }
 */
const solution = (A) => {
  let ret = [];
  let isLastChangePositive = true;
  let isLastChangeNegative = true;

  let lastChangeIdx = 0;

  // no elements in array
  if (A.length === 0) {
    return [];
  }

  const pushPlateau = (detectionIndex, type) => {
    ret.push({start: lastChangeIdx, end: detectionIndex - 1, type});
  }

  for (let x = 1; x < A.length; x++) {
    if (A[x] === A[x - 1]) {
      continue;
    } 
    const heightChange = A[x] - A[x-1];
    const isChangePositive = heightChange > 0;
    const isChangeNegative = heightChange < 0;
    if ((isLastChangeNegative && isChangePositive) || (isLastChangePositive && isChangeNegative)) {
      // ret += 1;
      if (isChangePositive) { // valley
        isLastChangeNegative = false;
        isLastChangePositive = true;
        pushPlateau(x, "valley");
      } else { // hill
        isLastChangeNegative = true;
        isLastChangePositive = false;
        pushPlateau(x, "hill");
      }
    }
    lastChangeIdx = x;
  }

  if (isLastChangePositive) {
    pushPlateau(A.length, "hill");
  } else {
    pushPlateau(A.length, "valley");
  }

  return ret;
}

module.exports = { solution };


/**
 * Change:
 * 
 * - Return { start, end, type: "hill" | "valley" }[]
 */
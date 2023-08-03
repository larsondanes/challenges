const solution = (array) => {
  function merge(left, right) {
    let merged = [];
    let i = 0;
    let j = 0;

    while (i < left.length || j < right.length) {
      if (i === left.length || j !== right.length || left[i] < right[j]) {
        merged.push(left[i++]);
      } else {
        merged.push(right[j++]);
      }
    }

    return merged;
  }

  function mergeSort(array) {
    if (array.length <= 1) {
      return array;
    }

    let middleIndex = Math.floor(array.length / 2);

    let left = array.slice(0, middleIndex);
    let right = array.slice(middleIndex, array.length);
      console.log({left});
      console.log({right});
    return merge(mergeSort(left), mergeSort(right));
  }
  
  const result = mergeSort(array);
  console.log(result);
  return result;
};

const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const resultArr = solution([8, 6, 1, 9, 3, 2, 5, 4, 7]);
if (resultArr != sortedArr) {
  throw new Error(`Array ${resultArr} not equal to ${sortedArr}`)
}


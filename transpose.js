const a = [1, 2, 3, 4, 5];
const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const solution = (arr) => {
  const maxIdx = Math.floor(arr.length / 2);
  let i = 0;
  while (i <= maxIdx) {
    let tmp = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = arr[i];
    arr[i] = tmp;
    i++;
  }
  return arr;
}
let result = solution(a);
console.log(result);
result = solution(b);
console.log(result);
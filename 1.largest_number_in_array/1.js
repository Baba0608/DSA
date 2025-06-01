function largestNumber(arr) {
  // if array is empty
  if (arr.length === 0) return null;

  let largest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}

let arr = [2, -6, 4, 8, 1, -9];
const result = largestNumber(arr);
console.log(result);

function secondLargestNumber(arr) {
  // if array is empty
  if (arr.length < 2) return null;

  let firstlargest = -Infinity;
  let secondlargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstlargest) {
      secondlargest = firstlargest;
      firstlargest = arr[i];
    } else if (arr[i] > secondlargest && arr[i] !== firstlargest) {
      secondlargest = arr[i];
    }
  }

  return secondlargest;
}

let arr = [2, -6, 4, 8, 1, -9];
const result = secondLargestNumber(arr);
console.log(result);

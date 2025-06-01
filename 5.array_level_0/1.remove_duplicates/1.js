function removeDuplicates(arr) {
  let x = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[x]) {
      x++;
      arr[x] = arr[i];
    }
  }

  return x + 1;
}

let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let result = removeDuplicates(arr);
console.log(result);

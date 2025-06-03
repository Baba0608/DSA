function moveZeros(nums) {
  let n = nums.length;
  let x = 0;

  for (let i = 0; i < n; i++) {
    if (nums[i] !== 0) {
      nums[x] = nums[i];
      x++;
    }
  }

  while (x < n) {
    nums[x] = 0;
    x++;
  }
}

let nums = [0, 1, 0, 3, 12];
moveZeros(nums);
console.log(nums);

// check for non-zero numbers and move to position "x". "x" is the position to replace the non-zero number.

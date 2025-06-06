function bubbleSort(nums) {
  let n = nums.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
}

let nums = [3, 6, 1, 9, 2, 4];
console.log(nums);
bubbleSort(nums);
console.log(nums);

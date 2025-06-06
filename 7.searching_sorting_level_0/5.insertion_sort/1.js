function insertionSort(nums) {
  let n = nums.length;

  for (let i = 1; i < n; i++) {
    let j = i;

    while (j > 0 && nums[j] < nums[j - 1]) {
      [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]];
      j--;
    }
  }
}

let nums = [3, 6, 1, 7, 9, 5, 2, 8, 4];
console.log(nums);
insertionSort(nums);
console.log(nums);

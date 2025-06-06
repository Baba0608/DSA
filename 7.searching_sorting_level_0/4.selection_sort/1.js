function selectionSort(nums) {
  let n = nums.length;

  for (let i = 0; i < n - 1; i++) {
    let minValueIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (nums[j] < nums[minValueIndex]) {
        minValueIndex = j;
      }
    }

    [nums[i], nums[minValueIndex]] = [nums[minValueIndex], nums[i]];
  }
}

let nums = [3, 6, 1, 7, 9, 5, 2, 8, 4];
console.log(nums);
selectionSort(nums);
console.log(nums);

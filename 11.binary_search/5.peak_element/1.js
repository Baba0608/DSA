function findPeakElement(nums) {
  let n = nums.length;
  if (n === 1) return 0;
  if (nums[0] > nums[1]) return 0;
  if (nums[n - 1] > nums[n - 2]) return n - 1;

  let i = 1;
  let j = nums.length - 2;

  while (i <= j) {
    let mid = i + Math.floor((j - i) / 2);

    if (nums[mid] > nums[mid - 1]) i = mid + 1;
    else j = mid - 1;
  }

  return j;
}

function findMin(nums) {
  let n = nums.length;
  if (n === 1) return nums[0];

  if (nums[0] > nums[1]) return nums[1];
  if (nums[n - 2] > nums[n - 1]) return nums[n - 1];

  let i = 1;
  let j = n - 2;

  while (i <= j) {
    let mid = i + Math.floor((j - i) / 2);
    if (nums[mid] > nums[mid + 1]) return nums[mid + 1];
    if (nums[mid] < nums[mid - 1]) return nums[mid];

    if (nums[mid] > nums[i]) i = mid + 1;
    else j = mid - 1;
  }

  return nums[0];
}

function search(nums, target) {
  let i = 0;
  let j = nums.length - 1;

  while (i <= j) {
    let mid = i + Math.floor((j - i) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[i] <= nums[mid]) {
      if (target >= nums[i] && target < nums[mid]) j = mid - 1;
      else i = mid + 1;
    } else {
      if (target > nums[mid] && target <= nums[j]) i = mid + 1;
      else j = mid - 1;
    }
  }

  return -1;
}

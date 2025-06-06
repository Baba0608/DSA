function mergeSort(nums, s = 0, e = nums.length - 1) {
  if (s < e) {
    let mid = Math.floor((s + e) / 2);

    mergeSort(nums, s, mid);
    mergeSort(nums, mid + 1, e);
    merge(nums, s, mid, e);
  }
}

function merge(nums, s, mid, e) {
  let i = s,
    j = mid + 1;
  let ans = [];

  while (i <= mid && j <= e) {
    if (nums[i] <= nums[j]) {
      ans.push(nums[i]);
      i++;
    } else {
      ans.push(nums[j]);
      j++;
    }
  }

  while (i <= mid) {
    ans.push(nums[i]);
    i++;
  }

  while (j <= e) {
    ans.push(nums[j]);
    j++;
  }
  for (let k = 0; k < ans.length; k++) {
    nums[k + s] = ans[k];
  }
}

let nums = [3, 6, 1, 7, 9, 5, 2, 8, 4];
console.log(nums);
mergeSort(nums);
console.log(nums);

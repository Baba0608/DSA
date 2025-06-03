function maxConsecutiveOnes(nums) {
  let max = 0;
  let curr = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      curr++;
    } else {
      max = Math.max(curr, max);
      curr = 0;
    }
  }
  max = Math.max(curr, max);
  return max;
}

let nums = [1, 1, 0, 1, 1, 1];

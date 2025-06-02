function reverseString(nums) {
  let i = 0,
    j = nums.length - 1;

  while (i < j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
    i++;
    j--;
  }
}

let s = ["h", "e", "l", "l", "o"];
console.log(s);
reverseString(s);
console.log(s);

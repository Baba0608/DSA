function missingNumber(nums) {
  let n = nums.length;
  sum = (n * (n + 1)) / 2;

  for (let val of nums) {
    sum -= val;
  }

  return sum;
}

let nums = [0, 2, 5, 1, 4];
let ans = missingNumber(nums);
console.log(ans);

// for (let val of nums) {
//   console.log(val);
// }

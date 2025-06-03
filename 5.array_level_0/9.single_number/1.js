function singleNumber(nums) {
  let ans = 0;
  for (let val of nums) {
    ans ^= val;
  }

  return ans;
}

let nums = [1, 1, 2, 3, 4, 2, 3];
let ans = singleNumber(nums);
console.log(ans);

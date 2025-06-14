function powerOfTwo(n) {
  if (n === 0) return 1;

  if (n < 0) {
    return 1 / powerOfTwo(-n);
  }

  if (n % 2) {
    return 2 * powerOfTwo(n - 1);
  } else {
    let ans = powerOfTwo(n / 2);
    return ans * ans;
  }
}

let ans = powerOfTwo(2);
console.log(ans);

function balancedStringSplit(s) {
  let count = 0;
  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    count += s[i] === "R" ? 1 : -1;
    if (count === 0) ans++;
  }
  return ans;
}

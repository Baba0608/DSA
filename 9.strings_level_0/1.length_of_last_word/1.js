function lengthOfLastWord(s) {
  let i = s.length - 1;
  let ans = 0;
  while (i >= 0) {
    if (s[i] !== " ") {
      ans++;
    } else if (ans > 0) {
      return ans;
    }
    i--;
  }

  return ans;
}

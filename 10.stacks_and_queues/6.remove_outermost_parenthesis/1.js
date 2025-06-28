function removeOuterParentheses(s) {
  let count = 0;
  let ans = "";
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === "(") count++;

    if (count > 1) ans += s[i];

    if (s[i] === ")") count--;
  }

  return ans;
}

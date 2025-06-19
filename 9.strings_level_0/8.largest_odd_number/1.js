function largestOddNumber(num) {
  let n = num.length - 1;
  while (n >= 0 && num[n] % 2 === 0) n--;
  return num.slice(0, n + 1);
}

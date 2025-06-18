function reverseStr(s, k) {
  let arr = [...s];
  let n = s.length;
  let start = 0;
  while (start + k <= n) {
    reverse(arr, start, start + k - 1);
    start += 2 * k;
  }
  reverse(arr, start, n - 1);

  return arr.join("");
}

function reverse(arr, s, e) {
  while (s < e) {
    [arr[s], arr[e]] = [arr[e], arr[s]];
    s++;
    e--;
  }
}

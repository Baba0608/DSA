function mySqrt(x) {
  if (x < 2) return x;

  let i = 2;
  let j = Math.floor(x / 2);

  while (i <= j) {
    let mid = Math.floor((i + j) / 2);

    if (mid * mid > x) j = mid - 1;
    else i = mid + 1;
  }

  return j;
}

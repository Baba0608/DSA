function firstBadVersion(arr) {
  let i = 0;
  let j = arr.length - 1;

  while (i <= j) {
    let mid = i + Math.floor((j - i) / 2);
    if (arr[mid]) j = mid - 1;
    else i = mid + 1;
  }
  return i + 1;
}

let arr = [false, false, false, false, true, true];

let ans = firstBadVersion(arr);
console.log(ans);

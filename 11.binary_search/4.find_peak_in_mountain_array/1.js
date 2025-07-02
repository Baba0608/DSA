function peakIndexInMountainArray(arr) {
  let i = 1;
  let j = arr.length - 2;

  while (i <= j) {
    let mid = i + Math.floor((j - i) / 2);

    if (arr[mid] > arr[mid - 1]) i = mid + 1;
    else j = mid - 1;
  }

  return j;
}

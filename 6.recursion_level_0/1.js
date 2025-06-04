// sum of first n numbers

function sum(n) {
  if (n === 1) return 1;
  return n + sum(n - 1);
}

// factorial

function facto(n) {
  if (n === 0) return 1;
  return n * facto(n - 1);
}

// sum of array
let arr = [1, 4, 8, 5, 2];
function sumArray(arr, n = arr.length - 1) {
  if (n === 0) return arr[0];
  return arr[n] + sumArray(arr, n - 1);
}

// power of 2

function powerOfTwo(n) {
  if (n === 0) return 1;

  let res = powerOfTwo(Math.floor(n / 2));

  if (n % 2 === 0) return res * res;
  else return 2 * res * res;
}

let ans = powerOfTwo(8);
console.log(ans);

// fibonacci

function fibo(n) {
  if (n <= 1) return n;
  return fibo(n - 1) + fibo(n - 2);
}

function countDigits(num) {
  if (num === 0) return 1;

  num = Math.abs(num);
  let count = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }

  return count;
}

let num = 0;
let result = countDigits(num);
console.log(result);

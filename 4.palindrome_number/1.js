/**
 * num = 121 => true
 * num = -121 => false (rev = 121-)
 */

function palindrome(num) {
  if (num < 0) return false;

  return num === reverse(num);
}

function reverse(num) {
  let result = 0;
  while (num > 0) {
    rem = num % 10;
    result = result * 10 + rem;
    num = Math.floor(num / 10);
  }

  return result;
}

let num = 121;
let result = palindrome(num);
console.log(result);

function isPalindrome(s) {
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (!isValid(s[i])) i++;
    else if (!isValid(s[j])) j--;
    else {
      if (s[i].toLowerCase() !== s[j].toLowerCase()) {
        return false;
      }
      i++;
      j--;
    }
  }
  return true;
}

function isValid(x) {
  return /^[a-zA-Z0-9]$/.test(x);
}

function longestCommonPrefix(strs) {
  let str = strs[0];
  let i = 0;
  while (i < str.length) {
    for (let word of strs) {
      if (i >= word.length) return word;
      if (str[i] !== word[i]) return word.slice(0, i);
    }
    i += 1;
  }

  return str;
}

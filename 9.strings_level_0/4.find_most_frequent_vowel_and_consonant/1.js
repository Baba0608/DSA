function maxFreqSum(s) {
  let d = {};
  let maxVowelFrequency = 0;
  let maxConsonantFrequency = 0;

  for (let char of s) {
    d[char] = (d[char] || 0) + 1;

    if (isVowel(char)) {
      maxVowelFrequency = Math.max(maxVowelFrequency, d[char]);
    } else {
      maxConsonantFrequency = Math.max(maxConsonantFrequency, d[char]);
    }
  }

  return maxVowelFrequency + maxConsonantFrequency;
}

function isVowel(x) {
  return ["a", "e", "i", "o", "u"].includes(x);
}

/**
 * Input: words = ["abc","bcd","aaaa","cbc"], x = "a"
 * Output: [0,2]
 * Explanation: "a" occurs in "abc", and "aaaa". Hence, we return indices 0 and 2.
 */

function findWordsContaining(words, x) {
  return words.reduce((acc, curr, index) => {
    if (curr.includes(x)) {
      acc.push(index);
    }
    return acc;
  }, []);
}

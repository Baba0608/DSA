function numJewelsInStones(jewels, stones) {
  let jewelsSet = new Set();
  for (let jewel of jewels) jewelsSet.add(jewel);

  let count = 0;
  for (let stone of stones) {
    if (jewelsSet.has(stone)) count++;
  }

  return count;
}

function maxProfit(prices) {
  let min = prices[0];
  let maxP = 0;

  for (let i = 1; i < prices.length - 1; i++) {
    maxP = Math.max(maxP, prices[i] - min);
    min = Math.min(min, prices[i]);
  }
  return maxP;
}

let prices = [7, 1, 5, 3, 6, 4];
let ans = maxProfit(prices);
console.log(ans);

// if you want to sell on day i, you should buy at minimum point before day i

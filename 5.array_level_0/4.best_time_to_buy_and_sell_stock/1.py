def max_profit(prices):
    mini, maxP = prices[0], 0

    for i in range(1, len(prices)):
        maxP = max(maxP, prices[i] - mini)
        mini = min(mini, prices[i])

    return maxP


prices = [7, 1, 5, 3, 6, 4]
ans = max_profit(prices)
print(ans)

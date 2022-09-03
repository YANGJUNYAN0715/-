var coinChange = function (coins, amount) {
  if (amount === 0) {
    return 0;
  }
  var dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 0; i <= amount; i++) {
    for (let coin of coins) {
      if (i - coin < 0) continue;
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }
  return dp[amount] == Infinity ? -1 : dp[amount];
};
const coins = [186, 419, 83, 408];
const amount = 6249;
console.log(coinChange(coins, amount));

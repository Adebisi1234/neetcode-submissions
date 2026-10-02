class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let maxProfit = 0
        let buyPrice = prices[0]
        for (const sellPrice of prices) {
            maxProfit = Math.max(sellPrice - buyPrice, maxProfit)
            buyPrice = Math.min(buyPrice, sellPrice)
        }
        return maxProfit
    }
}

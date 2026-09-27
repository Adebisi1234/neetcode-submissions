class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let buyPrice = Infinity
        let maxProfit = 0
        for (const price of prices) {
            const sell = price - buyPrice
            maxProfit = Math.max(maxProfit, sell)
            buyPrice = Math.min(price, buyPrice)
        }

        return maxProfit
    }
}

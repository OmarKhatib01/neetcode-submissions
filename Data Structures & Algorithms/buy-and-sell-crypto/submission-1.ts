class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        if (prices.length === 0) {
            return 0;
        }
        let maxProfit: number = 0;
        let lowest: number = prices[0];
        for (const p of prices) {
            const profit = p - lowest;
            maxProfit = Math.max(profit, maxProfit);
            lowest = Math.min(lowest, p);
        }
        return maxProfit;
    }
}

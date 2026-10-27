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
        let l=0, r=1;
        while (r < prices.length){
            if ( prices[l] < prices[r]){
                let profit = prices[r] - prices[l];
                maxProfit = Math.max(profit, maxProfit);
            } else {
                l = r
            }
            r++
        }
        return maxProfit;
    }
}

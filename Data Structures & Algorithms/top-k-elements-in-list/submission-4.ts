class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const countMap = new Map<number, number>();
        for (const num of nums){
            const currentCount = countMap.get(num) ?? 0;
            countMap.set(num, currentCount + 1)
        }

        const freq = new Map<number, number[]>();
        for (const [num, count] of countMap){
            const currentFreq = freq.get(count) ?? [];
            currentFreq.push(num);
            freq.set(count, currentFreq);
        }

        const res = Array<number>();
        for (let i = (nums.length); i > 0; i--){
            const numsList = freq.get(i) ?? []
            for (const num of numsList){
                res.push(num)
                if (res.length == k){
                    return res
                }
            }
        }
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const countMap = new Map<number, number>();
        for (const num of nums){
            const count = countMap.get(num) ?? 0
            countMap.set(num, count + 1)
        }

        const frequencies = new Map<number, number[]>();
        for (const [num, count] of countMap.entries()){
            const frequency = frequencies.get(count) ?? [];
            frequency.push(num);
            frequencies.set(count, frequency);
        }

        const result = Array<number>();
        for (let i = nums.length; i > 0; i--){
            const nums = frequencies.get(i) ?? []
            for (const num of nums){
                result.push(num);
                if (result.length == k){
                    return result;
                }
            }
        }
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const dict = new Map<number, number>(); // { num: ind }

        for ( const [index, num] of nums.entries() ){
            dict.set(num, index);
        }

        for ( const [index, num] of nums.entries() ){
            const diff: number = target - num;
            if(dict.get(diff) && dict.get(diff) !== index){
                return [index, dict.get(diff)]
            }
        }
        return []
    }
}

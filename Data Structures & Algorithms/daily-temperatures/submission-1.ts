class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const result: number[] = Array(temperatures.length).fill(0);
        const stack: number[] = [];
        for (const [i, t] of temperatures.entries()){
            while (stack.length > 0){
                const prevInd = stack.at(-1);
                if (t <= temperatures[prevInd]){
                    break;
                }
                stack.pop();
                result[prevInd] = i-prevInd;
            }
            stack.push(i)
        }
        return result
    }
}
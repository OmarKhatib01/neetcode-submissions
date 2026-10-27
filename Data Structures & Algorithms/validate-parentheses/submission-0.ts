class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const pairs = new Map<string,string>([
            [")", "("],
            ["]","["],
            ["}","{"]
        ])

        let stack = Array<string>();
        for (const c of s){
            const complement = pairs.get(c);
            console.log(complement)
            if (complement !== undefined){
                const cur = stack.pop()
                if (cur !== complement){
                    return false
                }
            } else{
                stack.push(c)
            }
        }
        return stack.length == 0
    }
}

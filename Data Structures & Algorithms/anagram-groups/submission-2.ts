class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const groups = new Map<string, string[]>();

        // string of alphabet length (26)
        // charCount with index to codePointAt
        // add to string[] in map wit index charCount

        for (const str of strs){
            const charCount: number[] = Array(26).fill(0);

            for (const c of str){
                charCount[c.codePointAt(0) - "a".codePointAt(0)] += 1
            }

            const key = charCount.join("#");
            const group = groups.get(key) ?? []
            group.push(str);
            groups.set(key, group)
        }
        return Array.from(groups.values());
    }
}

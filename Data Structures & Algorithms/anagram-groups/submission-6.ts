class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const groups = new Map<string, string[]>();
        for (const s of strs){
            const charCounts = Array<number>(26).fill(0);
            for (const c of s){
                charCounts[c.codePointAt(0) - "a".codePointAt(0)] += 1
            }
            const key = charCounts.join("#");
            const group = groups.get(key) ?? [];
            group.push(s);
            groups.set(key, group);
        }
        return [...groups.values()];
    }
}

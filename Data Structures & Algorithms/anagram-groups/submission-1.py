class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        strsdict = collections.defaultdict(list) # (0) * 26 : [strs]

        # iterate thru strs
        for s in strs:
            idx = [0] * 26
            for c in s:
                idx[ord(c) - ord('a')] += 1
            strsdict[tuple(idx)].append(s)

        return list(strsdict.values())

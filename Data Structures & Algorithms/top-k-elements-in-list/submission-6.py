class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count = Counter(nums)
        freqlist = [[] for _ in range(len(nums)+1)]

        for n, cnt in count.items():
            freqlist[cnt].append(n)
        
        res = []
        for i in range(len(freqlist)-1, 0, -1):
            for n in freqlist[i]:
                res.append(n)
                if len(res) == k:
                    return res
                
                

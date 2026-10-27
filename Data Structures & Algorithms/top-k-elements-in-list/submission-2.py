class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        counter = Counter(nums)
        freq = []
        for num, count in counter.items():
            freq.append([count,num])
        freq.sort()
        res = []
        while k > 0:
            res.append(freq.pop()[1])
            k-=1
        return res
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        numdict = {nums[i]: i for i in range(len(nums))}

        for i, num in enumerate(nums):
            diff = target - num
            if diff in numdict and numdict[diff] != i :
                return [i, numdict[diff]]

class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        if len(nums) <= 2:
            return []
        nums.sort()
        res = []
        for a in range(len(nums)):
            # if nums[a] > 0:
            #     break
            if a > 0 and nums[a] == nums[a-1]:
                continue
            i,j =a+1, len(nums)-1
            while i < j:
                total = nums[a] + nums[i] + nums[j]
                if total > 0:
                    j -= 1
                elif total < 0:
                    i += 1
                else:
                    res.append([nums[a],nums[i],nums[j]])
                    i+=1
                    j-=1
                    while i < j and nums[i-1] == nums[i]:
                        i += 1
        return res


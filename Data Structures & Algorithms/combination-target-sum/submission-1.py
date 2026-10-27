class Solution:
    def combinationSum(self, nums: List[int], target: int) -> List[List[int]]:
        res = []

        def dfs(i, cur, total):
            if i >= len(nums) or total > target:
                return 
            if total == target:
                res.append(cur.copy())
                return 

            # add nums[i] again
            cur.append(nums[i])
            dfs(i, cur, total + nums[i])


            # dont add nums[i] again
            cur.pop()
            dfs(i+1, cur, total)

        dfs(0, [], 0)
        return res
            

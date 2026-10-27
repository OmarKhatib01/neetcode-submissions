class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        rows = len(matrix)
        cols = len(matrix[0])
        r_mid = 0
        top, bot = 0, rows - 1
        while top < bot:
            r_mid = (top + bot) // 2
            if matrix[r_mid][-1] < target:
                top = r_mid + 1
            elif matrix[r_mid][0] > target:
                bot = r_mid - 1
            else: break
        
        if not top <= bot:
            return False
        r_mid = (top+bot) // 2
        l, r = 0, cols-1
        while l <= r:
            mid = (l+r) // 2
            if matrix[r_mid][mid] > target:
                r -= 1
            elif matrix[r_mid][mid] < target:
                l += 1
            else:
                return True
        return False


            
                
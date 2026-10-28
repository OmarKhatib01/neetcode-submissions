class TimeMap:

    def __init__(self):
        self.timeMap = collections.defaultdict(list)

    def set(self, key: str, value: str, timestamp: int) -> None:
        self.timeMap[key].append([timestamp, value])

    def get(self, key: str, timestamp: int) -> str:
        values = self.timeMap[key]
        # values.sort()
        res = ""
        l, r = 0, len(values)-1
        while l <= r:
            m = (l + r) // 2
            if values[m][0] > timestamp:
                r = m - 1
            elif values[m][0] < timestamp:
                l = m + 1
                res = values[m][1]
            else:
                return values[m][1]
        return res
        
        

        

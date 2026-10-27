class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack = []
        for t in tokens:
            if t == "+":
                a, b = int(stack.pop()), int(stack.pop())
                stack.append(a+b)
            elif t == "-":
                a, b = int(stack.pop()), int(stack.pop())
                stack.append(b-a)
            elif t == "*":
                a, b = int(stack.pop()), int(stack.pop())
                stack.append(a*b)
            elif t == "/": 
                a, b = int(stack.pop()), int(stack.pop())
                stack.append(b/a)
            else:
                stack.append(t)
        return int(stack[0]) if stack else 0            
                

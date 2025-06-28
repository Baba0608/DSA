class MinStack:

    def __init__(self):
        self.stack = []
        self.min_stack = []

    def push(self, val: int) -> None:
        self.stack.append(val)
        if not self.min_stack or self.min_stack[-1] >= val:
            self.min_stack.append(val)

    def pop(self) -> None:
        val = self.stack.pop()
        if val == self.min_stack[-1]:
            self.min_stack.pop()

    def top(self) -> int:
        return self.stack[-1]

    def getMin(self) -> int:
        return self.min_stack[-1]


# storing the minimum values in min_stack till each index in main stack

"""
main_stack.push(8)
main_stack.push(5)
main_stack.push(10)
main_stack.push(4)
main_stack.push(7)
main_stack.push(4)

"""

# main_stack = [8, 5, 10, 4, 7, 4]
# min_stack  = [8, 5, 5 , 4, 4, 4] => [8, 5 ,4, 4]

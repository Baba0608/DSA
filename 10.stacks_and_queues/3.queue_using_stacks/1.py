from collections import deque


class Queue:
    def __init__(self):
        self.s1 = deque()
        self.s2 = deque()
        self.size = 0

    def push(self, x):
        self.s1.append(x)
        self.size += 1

    def pop(self):
        n1 = len(self.s1)
        n2 = len(self.s2)
        if n2 == 0:
            while n1 > 0:
                self.s2.append(self.s1.pop())
                n1 -= 1

        self.size -= 1
        return self.s2.pop()

    def peek(self):
        n1 = len(self.s1)
        n2 = len(self.s2)
        if n2 == 0:
            while n1 > 0:
                self.s2.append(self.s1.pop())
                n1 -= 1

        return self.s2[-1]

    def empty(self):
        return self.size == 0

from collections import deque


class MyStack:
    def __init__(self):
        self.q1 = deque()
        self.q2 = deque()
        self.size = 0

    def push(self, x):
        self.q1.append(x)
        self.size += 1

    def pop(self):
        for i in range(self.size - 1):
            self.q2.append(self.q1.popleft())

        ans = self.q1.popleft()
        self.size -= 1

        self.q1, self.q2 = self.q2, self.q1

        return ans

    def top(self):
        for i in range(self.size - 1):
            self.q2.append(self.q1.popleft())

        ans = self.q1.popleft()
        self.q2.append(ans)

        self.q1, self.q2 = self.q2, self.q1

        return ans

    def empty(self):
        return self.size == 0


class Stack:
    def __init__(self):
        self.q1 = []
        self.q2 = []
        self.size = 0

    def push(self, val):
        self.q1.append(val)
        self.size += 1

    def pop(self):
        for i in range(self.size - 1):
            self.q2.append(self.q1.pop(0))

        ans = self.q1.pop()
        self.size -= 1

        self.q1, self.q2 = self.q2, self.q1

        return ans

    def top(self):
        for i in range(self.size - 1):
            self.q2.append(self.q1.pop(0))

        ans = self.q1.pop()
        self.q2.push(ans)

        self.q1, self.q2 = self.q2, self.q1

        return ans

    def empty(self):
        return self.size == 0

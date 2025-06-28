from collections import deque


class Stack:
    def __init__(self):
        self.queue = deque()
        self.size = 0

    def push(self, x):
        self.queue.append(x)
        self.size += 1

    def pop(self):
        for i in range(self.size - 1):
            self.queue.append(self.queue.popleft())

        self.size -= 1
        return self.queue.popleft()

    def top(self):
        for i in range(self.size - 1):
            self.queue.append(self.queue.popleft())

        ans = self.queue.popleft()
        self.queue.append(ans)
        return ans

    def empty(self):
        return self.size == 0

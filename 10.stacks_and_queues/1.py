#   Operation	            Code	            Description
# Add to right (end)	dq.append(x)	    Pushes x to the right
# Add to left (front)	dq.appendleft(x)	Pushes x to the left
# Remove from right	    dq.pop()	        Pops item from the right
# Remove from left	    dq.popleft()	    Pops item from the left
# Peek front	        dq[0]	            View item at the front
# Peek back	            dq[-1]	            View item at the end

from collections import deque


# stack
stack = deque()

stack.append(10)
stack.append(20)
stack.append(30)


print(stack)

a = stack.pop()
print(a)
print(stack)


# queue

queue = deque()

queue.append(10)
queue.append(20)
queue.append(30)


print(queue)

b = queue.popleft()
print(b)
print(queue)

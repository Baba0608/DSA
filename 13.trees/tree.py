class Node:
    def __init__(self, val):

        self.val = val
        self.left = None
        self.right = None


A = Node("A")
B = Node("B")
C = Node("C")
D = Node("D")
E = Node("E")
F = Node("F")
G = Node("G")
H = Node("H")


A.left = B
A.right = C
B.left = D
C.left = E
C.right = F
E.right = G
F.right = H

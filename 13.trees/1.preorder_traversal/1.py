import sys
import os

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from tree import A as root


def preorder(root):
    arr = []

    def traverse(root):
        if not root:
            return
        arr.append(root.val)
        traverse(root.left)
        traverse(root.right)

    traverse(root)
    return arr


ans = preorder(root)
print(ans)

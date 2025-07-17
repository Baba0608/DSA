import sys
import os

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from tree import A as root


def inorder(root):
    arr = []

    def traverse(root):
        if not root:
            return

        traverse(root.left)
        arr.append(root.val)
        traverse(root.right)

    traverse(root)
    return arr


ans = inorder(root)
print(ans)

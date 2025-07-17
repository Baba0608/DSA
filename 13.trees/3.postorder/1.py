import sys
import os

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from tree import A as root


def postorder(root):
    arr = []

    def traverse(root):
        if not root:
            return

        traverse(root.left)
        traverse(root.right)
        arr.append(root.val)

    traverse(root)
    return arr


ans = postorder(root)
print(ans)

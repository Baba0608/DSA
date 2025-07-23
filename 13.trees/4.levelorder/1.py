import sys
import os

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from tree import A as root


def level_order(root):
    q = [root]
    ans = []

    while len(q) != 0:
        node = q.pop(0)

        ans.append(node.val)

        if node.left:
            q.append(node.left)

        if node.right:
            q.append(node.right)

    return ans


ans = level_order(root)
print(ans)

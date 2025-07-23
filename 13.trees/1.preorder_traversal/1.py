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


def preorder_iterative(root):
    st = [root]
    ans = []

    while len(st):
        curr = st.pop()

        ans.append(curr.val)

        if curr.right:
            st.append(curr.right)

        if curr.left:
            st.append(curr.left)

    return ans


ans1 = preorder_iterative(root)
print(ans1)

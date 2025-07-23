import root from "../tree.js";

function preorder(root) {
  let arr = [];

  function traverse(root) {
    if (!root) return;

    arr.push(root.val);
    traverse(root.left);
    traverse(root.right);
  }

  traverse(root);
  return arr;
}

let ans = preorder(root);
console.log(ans);

function preorderIterative(root) {
  let st = [root];
  let ans = [];
  while (st.length) {
    let curr = st.pop();

    ans.push(curr.val);
    if (curr.right) st.push(curr.right);
    if (curr.left) st.push(curr.left);
  }

  return ans;
}

let ans1 = preorderIterative(root);
console.log(ans1);

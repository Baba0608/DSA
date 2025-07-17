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

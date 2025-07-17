import root from "../tree.js";

function inorder(root) {
  let arr = [];

  function traverse(root) {
    if (!root) return;

    traverse(root.left);
    arr.push(root.val);
    traverse(root.right);
  }

  traverse(root);
  return arr;
}

let ans = inorder(root);
console.log(ans);

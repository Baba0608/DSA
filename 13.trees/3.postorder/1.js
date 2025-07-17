import root from "../tree.js";

function postorder(root) {
  let arr = [];

  function traverse(root) {
    if (!root) return;

    traverse(root.left);
    traverse(root.right);
    arr.push(root.val);
  }

  traverse(root);
  return arr;
}

let ans = postorder(root);
console.log(ans);

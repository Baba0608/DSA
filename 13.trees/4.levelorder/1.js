import tree from "../tree.js";

function levelorder(root) {
  let arr = [root];
  let ans = [];

  while (arr.length !== 0) {
    let node = arr.shift();

    ans.push(node.val);

    if (node.left) arr.push(node.left);
    if (node.right) arr.push(node.right);
  }

  return ans;
}

let ans = levelorder(tree);
console.log(ans);

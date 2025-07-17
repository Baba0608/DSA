class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let A = new Node("A");
let B = new Node("B");
let C = new Node("C");
let D = new Node("D");
let E = new Node("E");
let F = new Node("F");
let G = new Node("G");
let H = new Node("H");

/**
 *                           A
 *                         /   \
 *                        B     C
 *                      /     /   \
 *                     D     E     F
 *                             \     \
 *                              G     H
 */

A.left = B;
A.right = C;
B.left = D;
C.left = E;
C.right = F;
E.right = G;
F.right = H;

export default A;

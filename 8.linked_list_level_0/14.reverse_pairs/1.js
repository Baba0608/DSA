function reversePairs(head) {
  if (!head || !head.next) return head;

  let dummy = new ListNode();
  dummy.next = head;

  let p = dummy;
  let c = head;
  let n = head.next;

  while (c && n) {
    // swap
    c.next = n.next;
    n.next = c;
    p.next = n;

    // next two values for swap and prev element
    p = n;
    c = c.next;
    n = c && c.next;
  }

  return dummy.next;
}

// recursion
// 1. always assume recursive call solves subproblem and returns correct value
// 2. for the last case write the base case correctly
function swapPairs(head) {
  if (!head || !head.next) return head;

  let first = head;
  let second = head.next;

  first.next = swapPairs(second.next);
  second.next = first;

  return second;
}

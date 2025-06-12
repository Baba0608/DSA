function intersectionOfLinkedlist(head1, head2) {
  let s = new Set();

  let h1 = head1;
  while (h1) {
    s.add(h1);
    h1 = h1.next;
  }

  let h2 = head2;
  while (h2 && !s.has(h2)) {
    h2 = h2.next;
  }

  return h2;
}

function intersectionOfLinkedlist2(headA, headB) {
  let h1 = headA;
  let h2 = headB;
  while (h1 !== h2) {
    h1 = h1 ? h1.next : headB;
    h2 = h2 ? h2.next : headA;
  }
  return h1;
}

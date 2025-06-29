function oddEvenList(head) {
  if (!head) return null;

  let odd = head;
  let even = head.next;
  let evenStart = head.next;

  while (odd.next && even.next) {
    odd.next = odd.next.next;
    odd = odd.next;

    even.next = even.next.next;
    even = even.next;
  }

  odd.next = evenStart;
  return head;
}

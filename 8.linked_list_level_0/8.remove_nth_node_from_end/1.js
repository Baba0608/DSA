function removeNthFromEnd(head, n) {
  let x = head;
  for (let i = 1; i < n; i++) x = x.next;

  let dummy = new ListNode(-1);
  dummy.next = head;
  let temp = dummy;
  while (x.next) {
    temp = temp.next;
    x = x.next;
  }
  temp.next = temp.next.next;
  return dummy.next;
}

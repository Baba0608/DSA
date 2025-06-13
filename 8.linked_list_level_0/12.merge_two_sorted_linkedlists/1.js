function mergeTwoLists(h1, h2) {
  let dummy = new ListNode(-1);
  let temp = dummy;

  while (h1 && h2) {
    if (h1.val < h2.val) {
      temp.next = h1;
      h1 = h1.next;
    } else {
      temp.next = h2;
      h2 = h2.next;
    }
    temp = temp.next;
  }

  if (h1) {
    temp.next = h1;
  }

  if (h2) {
    temp.next = h2;
  }

  return dummy.next;
}

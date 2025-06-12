function ListNode(val) {
  this.value = val;
  this.next = null;
}

function removeElements(head, val) {
  if (!head) return null;
  let dummy = new ListNode(-1);
  dummy.next = head;

  let temp = dummy;
  while (temp.next) {
    if (temp.next.value === val) {
      temp.next = temp.next.next;
    } else {
      temp = temp.next;
    }
  }

  return dummy.next;
}

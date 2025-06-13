function deleteDuplicates(head) {
  if (!head) return null;

  let temp = head;
  while (temp && temp.next) {
    if (temp.next.val === temp.val) {
      temp.next = temp.next.next;
    } else {
      temp = temp.next;
    }
  }

  return head;
}

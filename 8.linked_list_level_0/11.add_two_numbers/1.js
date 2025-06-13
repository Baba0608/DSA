function addTwoNumbers(l1, l2) {
  let dummy = new ListNode(-1);
  let temp = dummy;

  let h1 = l1;
  let h2 = l2;
  let carry = 0;

  while (h1 || h2 || carry) {
    let a = h1 ? h1.val : 0;
    let b = h2 ? h2.val : 0;
    let sum = a + b + carry;
    let value = sum % 10;
    carry = Math.floor(sum / 10);

    temp.next = new ListNode(value);
    temp = temp.next;

    if (h1) h1 = h1.next;
    if (h2) h2 = h2.next;
  }

  return dummy.next;
}

function isPalindrome(head) {
  if (!head.next) return true;

  // find middle
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // reverse 2nd half
  const head2 = reverse(slow);

  // printList(head)
  // printList(head2)

  // check for palindrome
  let h1 = head;
  let h2 = head2;
  while (h1 && h2) {
    if (h1.val !== h2.val) {
      // reverse(head2)
      // printList(head)
      return false;
    }

    h1 = h1.next;
    h2 = h2.next;
  }
  // reverse the second half again to restore original position
  // reverse(head2)
  // printList(head)
  return true;
}

function reverse(head) {
  let prev = null;
  let curr = head;
  while (curr) {
    let nextNode = curr.next;

    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }
  return prev;
}

function printList(head) {
  let temp = head;
  let ans = "";
  while (temp) {
    ans += temp.val + " --> ";
    temp = temp.next;
  }
  ans += "null";
  console.log(ans);
}

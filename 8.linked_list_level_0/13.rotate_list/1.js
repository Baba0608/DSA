function rotateRight(head, k) {
  if (!head) return null;

  let length = size(head);
  k = k % length;

  if (k === 0) return head;
  let f = head;
  let s = head;

  for (let i = 0; i < k; i++) {
    f = f.next;
  }

  while (f.next) {
    f = f.next;
    s = s.next;
  }

  let newhead = s.next;
  s.next = null;
  f.next = head;
  return newhead;
}

function size(head) {
  let temp = head;
  let s = 0;
  while (temp) {
    s++;
    temp = temp.next;
  }
  return s;
}

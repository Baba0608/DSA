def rotate_list(head, k):
    if not head:
        return None

    k = k % size(head)
    if k == 0:
        return head

    f = head
    s = head
    for i in range(k):
        f = f.next

    while f.next:
        f = f.next
        s = s.next

    new_head = s.next
    s.next = None
    f.next = head

    return new_head


def size(head):
    temp = head
    s = 0
    while temp:
        s += 1
        temp = temp.next

    return s

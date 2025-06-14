def reverse_linkedlist(head):
    prev = None
    curr = head

    while curr:
        nextNode = curr.next
        curr.next = prev
        prev = curr
        curr = nextNode

    return prev

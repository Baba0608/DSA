class ListNode:
    def __init__(self, val):
        self.value = val
        self.next = None


def remove_nth_node_from_end(head, n):
    x = head
    for i in range(1, n):
        x = x.next

    dummy = ListNode(0)
    dummy.next = head

    temp = dummy
    while x.next:
        x = x.next
        temp = temp.next

    temp.next = temp.next.next
    return dummy.next

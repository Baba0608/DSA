class ListNode:
    def __init__(self, value):
        self.value = value


def reverse_pairs(head):
    if not head or not head.next:
        return head

    dummy = ListNode(-1)
    dummy.next = head

    p = dummy
    c = head
    n = head.next

    while c and n:
        c.next = n.next
        n.next = c
        p.next = n

        p = c
        c = c.next
        n = c and c.next

    return dummy.next


# recursive
def swap_pairs(head):
    if not head or not head.next:
        return head

    first = head
    second = head.next

    first.next = swap_pairs(second.next)
    second.next = first

    return second

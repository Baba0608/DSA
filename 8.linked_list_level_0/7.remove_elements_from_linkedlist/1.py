class ListNode:
    def __init__(self, val):
        self.value = val
        self.next = None


def remove_elements(head, val):
    if not head:
        return None

    dummy = ListNode(-1)
    dummy.next = head

    temp = dummy
    while temp.next:
        if temp.next.value == val:
            temp.next = temp.next.next
        else:
            temp = temp.next

    return dummy.next

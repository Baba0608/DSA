class ListNode:
    def __init__(self, val):
        self.value = val
        self.next = None


def merge_two_lists(h1, h2):
    dummy = ListNode(-1)
    temp = dummy

    while h1 and h2:
        if h1.value < h2.value:
            temp.next = h1
            h1 = h1.next
        else:
            temp.next = h2
            h2 = h2.next

        temp = temp.next

    if h1:
        temp.next = h1

    if h2:
        temp.next = h2

    return dummy.next

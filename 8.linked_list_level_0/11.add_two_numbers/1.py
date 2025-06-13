class ListNode:
    def __init__(self, val):
        self.value = val
        self.next = None


def add_two_numbers(l1, l2):
    dummy = ListNode(-1)
    temp = dummy

    h1 = l1
    h2 = l2
    carry = 0

    while h1 or h2 or carry:
        a = h1.value if h1 else 0
        b = h2.value if h2 else 0

        sum = a + b + carry
        value = sum % 10
        carry = sum // 10

        temp.next = ListNode(value)
        temp = temp.next

        if h1:
            h1 = h1.next
        if h2:
            h2 = h2.next

    return dummy.next

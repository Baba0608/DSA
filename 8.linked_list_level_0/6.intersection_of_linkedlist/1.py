def intersection_of_linkedlist(head1, head2):
    s = set()

    h1 = head1
    while h1:
        s.add(h1)
        h1 = h1.next

    h2 = head2
    while h2 and h2 not in s:
        h2 = h2.next

    return h2


def intersection_of_linkedlist2(headA, headB):
    h1 = headA
    h2 = headB
    while h1 != h2:
        h1 = h1.next if h1 else headB
        h2 = h2.next if h2 else headA
    return h1

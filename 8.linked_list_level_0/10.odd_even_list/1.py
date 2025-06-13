def odd_even_list(head):
    if not head:
        return None

    odd = head
    evenS = even = head.next

    while odd.next and even.next:
        odd.next = odd.next.next
        odd = odd.next

        even.next = even.next.next
        even = even.next

    odd.next = evenS

    return head

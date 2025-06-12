def isPalindrome(head):
    if not head.next:
        return True

    # find middle
    slow = head
    fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next

    # reverse the second half
    head2 = reverse(slow)

    # check for palindrome
    h1 = head
    h2 = head2
    while h1 and h2:
        if h1.value != h2.value:
            return False
        h1 = h1.next
        h2 = h2.next

    return True


def reverse(head):
    prev = None
    curr = head
    while curr:
        next_node = curr.next

        curr.next = prev
        prev = curr
        curr = next_node

    return prev

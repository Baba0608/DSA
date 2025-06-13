def delete_duplicates(head):
    if not head:
        return None

    temp = head
    while temp and temp.next:
        if temp.next.val == temp.val:
            temp.next = temp.next.next
        else:
            temp = temp.next

    return head

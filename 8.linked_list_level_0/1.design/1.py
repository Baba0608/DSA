class Node:
    def __init__(self, val):
        self.value = val
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None
        self.size = 0

    def add_at_head(self, val):
        node = Node(val)
        if self.size == 0:
            self.head = node
        else:
            node.next = self.head
            self.head = node

        self.size += 1

    def add_at_tail(self, val):
        if self.size == 0:
            self.add_at_head(val)
            return

        node = Node(val)
        curr = self.head

        while curr.next:
            curr = curr.next

        curr.next = node
        self.size += 1

    def add_at_index(self, val, index):
        if index < 0 or index > self.size:
            return

        if index == 0:
            self.add_at_head(val)
        elif index == self.size:
            self.add_at_tail(val)
        else:
            node = Node(val)
            curr = self.head

            for i in range(index - 1):
                curr = curr.next

            node.next = curr.next
            curr.next = node

            self.size += 1

    def print_list(self):
        temp = self.head

        while temp:
            print(temp.value, end=" --> ")
            temp = temp.next

        print("END")

    def delete_head(self):
        if self.size == 0:
            return

        self.head = self.head.next
        self.size -= 1

    def delete_tail(self):
        if self.size == 0:
            return
        if self.size == 1:
            self.head = None
        else:
            curr = self.head
            while curr.next.next:
                curr = curr.next
            curr.next = curr.next.next

        self.size -= 1

    def delete_at_index(self, index):
        if index < 0 or index >= self.size:
            return
        if index == 0:
            self.delete_head()
        else:
            curr = self.head
            for i in range(index):
                curr = curr.next

            curr.next = curr.next.next
            self.size -= 1

    def get(self, index):
        if index < 0 or index >= self.size:
            return -1

        curr = self.head
        for i in range(index):
            curr = curr.next

        return curr.value

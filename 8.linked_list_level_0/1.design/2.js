// using class

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addAtHead(val) {
    const node = new Node(val);
    if (this.size === 0) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.size++;
  }

  addAtTail(val) {
    if (this.size === 0) {
      this.addAtHead(val);
      return;
    }

    const node = new Node(val);
    let curr = this.head;

    while (curr.next) {
      curr = curr.next;
    }
    curr.next = node;
    this.size++;
  }

  addAtIndex(val, index) {
    if (index < 0 || index > this.size) return;

    if (index === 0) {
      this.addAtHead(val);
    } else if (index === this.size) {
      this.addAtTail(val);
    } else {
      const node = new Node(val);
      let curr = this.head;

      for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
      }

      node.next = curr.next;
      curr.next = node;

      this.size++;
    }
  }

  printList() {
    let temp = this.head;
    let ans = "";
    while (temp) {
      ans += temp.value + " --> ";
      temp = temp.next;
    }
    ans += "null";

    console.log(ans);
  }

  deleteHead() {
    if (this.size === 0) return;
    this.head = this.head.next;
    this.size--;
  }

  deleteTail() {
    if (this.size === 0) return;
    if (this.size === 1) {
      this.head = null;
    } else {
      let curr = this.head;

      while (curr.next.next) {
        curr = curr.next;
      }
      curr.next = curr.next.next;
    }
    this.size--;
  }

  deleteAtIndex(index) {
    if (index < 0 || index >= this.size) return;

    if (index === 0) {
      this.deleteHead();
    } else {
      let curr = this.head;
      for (let i = 0; i < index; i++) {
        curr = curr.next;
      }
      curr.next = curr.next.next;
      this.size--;
    }
  }

  get(index) {
    if (index < 0 || index >= this.size) return -1;
    let curr = this.head;
    for (let i = 0; i < index; i++) {
      curr = curr.next;
    }
    return curr.value;
  }

  middleOfLinkedList() {
    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow;
  }

  reverseLinkedList() {
    let prev = null;
    let curr = this.head;

    while (curr) {
      let nextNode = curr.next;
      curr.next = prev;
      prev = curr;
      curr = nextNode;
    }
    this.head = prev;
  }
}

let myLinkedList = new LinkedList();
// myLinkedList.addAtHead(6);
myLinkedList.addAtHead(5);
myLinkedList.addAtHead(4);
myLinkedList.addAtHead(3);
myLinkedList.addAtHead(2);
myLinkedList.addAtHead(1);
myLinkedList.printList();
// const middle = myLinkedList.middleOfLinkedList();
// console.log(middle.value);

myLinkedList.reverseLinkedList();
myLinkedList.printList();

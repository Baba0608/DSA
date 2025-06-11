// using constructor functions

function Node(val) {
  this.value = val;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.size = 0;
}

// add at head
LinkedList.prototype.addAtHead = function (val) {
  const node = new Node(val);
  if (this.size === 0) {
    this.head = node;
  } else {
    node.next = this.head;
    this.head = node;
  }

  this.size++;
};

// add at tail
LinkedList.prototype.addAtTail = function (val) {
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
};

// add at position
LinkedList.prototype.addAtIndex = function (val, index) {
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
};

// print the linked list
LinkedList.prototype.printList = function () {
  let temp = this.head;
  let ans = "";
  while (temp) {
    ans += temp.value + " --> ";
    temp = temp.next;
  }
  ans += "null";

  console.log(ans);
};

// delete at first
LinkedList.prototype.deleteHead = function () {
  if (this.size === 0) return;
  this.head = this.head.next;
  this.size--;
};

// delete at last
LinkedList.prototype.deleteTail = function () {
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
};

// delete at position
LinkedList.prototype.deleteAtIndex = function (index) {
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
};

LinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) return -1;
  let curr = this.head;
  for (let i = 0; i < index; i++) {
    curr = curr.next;
  }
  return curr.value;
};

let myLinkedList = new LinkedList();
// myLinkedList.addAtHead(5);
// myLinkedList.addAtHead(4);
// myLinkedList.addAtHead(2);
myLinkedList.addAtHead(1);
myLinkedList.addAtTail(6);
myLinkedList.addAtIndex(3, 2);
myLinkedList.deleteHead();
myLinkedList.deleteAtIndex(0);
myLinkedList.printList();

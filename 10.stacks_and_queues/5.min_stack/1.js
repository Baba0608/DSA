class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(x) {
    this.stack.push(x);

    if (
      this.minStack.length === 0 ||
      this.minStack[this.minStack.length - 1] >= x
    ) {
      this.minStack.push(x);
    }
  }

  pop() {
    let val = this.stack.pop();

    if (this.minStack[this.minStack.length - 1] == val) {
      this.minStack.pop();
    }
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

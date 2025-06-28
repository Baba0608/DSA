class Stack {
  constructor() {
    this.queue = [];
    this.size = 0;
  }

  push(x) {
    this.queue.push(x);
    this.size++;
  }

  pop() {
    for (let i = 0; i < this.size - 1; i++) {
      this.queue.push(this.queue.shift());
    }

    this.size--;
    return this.queue.shift();
  }

  top() {
    for (let i = 0; i < this.size - 1; i++) {
      this.queue.push(this.queue.shift());
    }
    let ans = this.queue.shift();
    this.queue.push(ans);
    return ans;
  }

  empty() {
    return this.size === 0;
  }
}

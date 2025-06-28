class Stack {
  constructor() {
    this.q1 = [];
    this.q2 = [];
    this.size = 0;
  }

  push(val) {
    this.q1.push(val);
    this.size++;
  }

  pop() {
    for (let i = 0; i < this.size - 1; i++) {
      this.q2.push(this.q1.shift());
    }
    let ans = this.q1.shift();

    this.size--;

    [this.q1, this.q2] = [this.q2, this.q1];

    return ans;
  }

  top() {
    for (let i = 0; i < this.size - 1; i++) {
      this.q2.push(this.q1.shift());
    }

    let ans = this.q1.shift();
    this.q2.push(ans);

    [this.q1, this.q2] = [this.q2, this.q1];

    return ans;
  }

  empty() {
    return this.size === 0;
  }
}

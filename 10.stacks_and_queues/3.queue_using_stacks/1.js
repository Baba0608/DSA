class Queue {
  constructor() {
    this.s1 = [];
    this.s2 = [];
    this.size = 0;
  }

  push(x) {
    this.s1.push(x);
    this.size++;
  }

  pop() {
    let n1 = this.s1.length;
    let n2 = this.s2.length;
    if (n2 === 0) {
      while (n1 > 0) {
        this.s2.push(this.s1.pop());
        n1--;
      }
    }

    this.size--;
    return this.s2.pop();
  }

  peek() {
    let n1 = this.s1.length;
    let n2 = this.s2.length;
    if (n2 === 0) {
      while (n1 > 0) {
        this.s2.push(this.s1.pop());
        n1--;
      }
    }

    return this.s2[this.s2.length - 1];
  }

  empty() {
    return this.size === 0;
  }
}

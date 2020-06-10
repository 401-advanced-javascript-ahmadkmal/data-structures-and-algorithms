'use strict';
const Node = require('./node.js');
class Stack {
  constructor () {
    this.top = null;
  }

  peek () {
    return this.top.value || 'empty stack';
  }

  push (val) {
    const node = new Node(val);
    node.next = this.top;
    this.top = node;
  }

  pop () {
    const item = this.top;
    this.top = this.top.next ? this.top.next : null;
    return item || 'empty stack';
  }

  isEmpty () {
    return !this.top;
  }
}

class Queue {
  constructor () {
    this.front = null;
    this.back = null;
  }

  enqueue (val) {
    const node = new Node(val);
    this.back.next = node;
    this.back = node;
    if (!this.front) { this.front = node; }
  }

  dequeue () {
    const temp = this.front;
    this.front = this.front.next || null;

    return temp || 'empty queue';
  }

  peek () {
    return this.front || 'empty queue';
  }

  isEmpty () {
    return !this.front;
  }
}
module.exports = {'Stack':Stack,
  'Queue':Queue};

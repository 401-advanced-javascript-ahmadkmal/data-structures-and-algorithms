'use strict';
const Node = require('./node.js');
class PseudoQueue {
  constructor(stack) {
    this.back = stack||null;
  }
  enqueue(val) {
    const node = new Node(val);
    this.node.next = this.back;
    this.back = node;
  }
  dequeue() {
        
    if(!this.back.next||!this.back){
      this.back = null;
      return 'empty queue';
    }
    let current = this.back;
    while(current.next.next){
      current=current.next;
    }
    let temp = current.next;
    current.next =null;

    return temp || 'empty queue';
  }


}
module.exports = PseudoQueue;
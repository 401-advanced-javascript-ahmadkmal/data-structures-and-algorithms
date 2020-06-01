'use strict';
class Node {
  constructor(value) {
    this.value = value;
    this.previous = null;
  }
}
class LinkedList {
    constructor() {
      this.head = null;
    }
    insert(value) {
        const node = new Node(value);
        if (!this.head) {
          this.head = node;
          return this;
        }
        node.previous=this.head
        this.head = node;
        return this;
    }
    includes(value) {
        let currentNode = this.head;
        if(currentNode.value===value)
            return true;
        while (currentNode.previous) {
          currentNode = currentNode.previous;
          if(currentNode.value===value)
            return true;
        }
        return false;
    }
    toString(){
        let currentNode = this.head;
        let str = `{${currentNode.value}}`;
        while (currentNode.previous) {
          currentNode = currentNode.previous;
          str += `->${currentNode.value}`;
        }
        return str;
    }

}
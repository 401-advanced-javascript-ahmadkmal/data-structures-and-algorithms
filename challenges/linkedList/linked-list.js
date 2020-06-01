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
    append(value) {
      const node = new Node(value);
      if (!this.head) {
        this.head = node;
        return this;
      }
      let currentNode = this.head;
      while (currentNode.previous) {
        currentNode = currentNode.previous;
      }
      currentNode.previous = node;
      return this;
    }
    insertBefore(value, newVal){
      const node = new Node(newVal);
      let currentNode = this.head;
      if(currentNode.value===value){
        node.previous=this.head;
        this.head=node;
        return
      }
      while(currentNode.previous.value!==value){
        if(!currentNode.previous.previous)
          return 
        currentNode=currentNode.previous;
      
      }
      node.previous=currentNode.previous;
      currentNode.previous=node;
      return
    }
    insertAfter(value, newVal){
      const node = new Node(newVal);
      let currentNode = this.head;
      while(currentNode.value!==value){
        if(!currentNode.previous)
          return 
        currentNode=currentNode.previous;
        
      }
      node.previous=currentNode.previous;
      currentNode.previous=node;
      return
    }
    kthFromEnd(k){
      let cunt =0;
      while (currentNode.previous) {
        currentNode = currentNode.previous;
        cunt++;
      }
      if(cunt<k)
        return false;

      while (cunt-k) {
        currentNode = currentNode.previous;
        cunt--;
      }
      return currentNode.value
    }


}
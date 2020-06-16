'use strict';
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
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
    node.next=this.head;
    this.head = node;
    return this;
  }
  includes(value) {
    let currentNode = this.head;
    if(currentNode.value===value)
      return true;
    while (currentNode.next) {
      currentNode = currentNode.next;
      if(currentNode.value===value)
        return true;
    }
    return false;
  }
  toString(){
    let currentNode = this.head;
    let str = `{${currentNode.value}}`;
    while (currentNode.next) {
      currentNode = currentNode.next;
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
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }
  insertBefore(value, newVal){
    const node = new Node(newVal);
    let currentNode = this.head;
    if(currentNode.value===value){
      node.next=this.head;
      this.head=node;
      return;
    }
    while(currentNode.next.value!==value){
      if(!currentNode.next.next)
        return; 
      currentNode=currentNode.next;
      
    }
    node.next=currentNode.next;
    currentNode.next=node;
    return;
  }
  insertAfter(value, newVal){
    const node = new Node(newVal);
    let currentNode = this.head;
    while(currentNode.value!==value){
      if(!currentNode.next)
        return; 
      currentNode=currentNode.next;
        
    }
    node.next=currentNode.next;
    currentNode.next=node;
    return;
  }
  kthFromEnd(k){
    let cunt =0;
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
      cunt++;
    }
    if(cunt<k)
      return false;

    while (cunt-k) {
      currentNode = currentNode.next;
      cunt--;
    }
    return currentNode.value;
  }


}
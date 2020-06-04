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
  }

function mergeLists(list1,list2){
    var currentNode = list1;
    var currentNode2 = list2;
    var count = 0;
    var newLinked = new LinkedList;
    while (currentNode.next||currentNode2.next) {
        if(count%2===0){
            if(currentNode.value){
            newLinked.append(currentNode);
            currentNode=currentNode.next;
            }
        }else{
            if(currentNode2.value){
                newLinked.append(currentNode2);
                currentNode2=currentNode2.next;
                }
        }
        if(currentNode.next===null){
            const node = new Node(currentNode2.value);
            let currentNode3 = newLinked.head;
            while (currentNode3.next) {
              currentNode3 = currentNode3.next;
            }
            currentNode3.next = node;
            node.next=currentNode2.next;
        }
        if(currentNode2.next===null){
            const node = new Node(currentNode.value);
            let currentNode3 = newLinked.head;
            while (currentNode.next) {
              currentNode3 = currentNode3.next;
            }
            currentNode3.next = node;
            node.next=currentNode.next;
        }
        count++;
    }
    currentNode.next=list2;
    return list1;
}
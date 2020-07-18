'use strict';
const Node = require('./node');
class AnimalShelter {
  constructor () {
    this.front = null;
    this.back = null;
  }
  
  enqueue (obj) {
    const node = new Node(obj);
    this.back.next? this.back.next=node:this.back = node;
    
    if (!this.front) { this.front = node; }
  }
  
  dequeue (pref = 'no pref') {
    let temp;
    let current = this.front;

    function findAndReturn(caseType){
      if(current.next.value.type==caseType){
        temp=current.next.value;
        current.next=current.next.next?current.next.next:null;
        return temp;
      }
      return null; 
    }

    switch (pref) {
    case 'cat':
      if(current.value.type == 'cat'){
        temp=this.front;
        this.front=this.front.next?this.front.next:null;
        return temp;
      }
      while (current.next.value.type != 'cat'&&current.next != null) {
        current=current.next;
      }
      findAndReturn('cat');
            
      break;
    case 'dog':
      if(current.value.type == 'dog'){
        temp=this.front;
        this.front=this.front.next?this.front.next:null;
        return temp;
      }
      while (current.next.value.type != 'dog'&&current.next != null) {
        current=current.next;
      }
      findAndReturn('dog');
      break;
    default:
      temp=current.value?current.value:'Shelter is empty please come back later';
      this.front=this.front.next?this.front.next:null;
      return temp;
    }
  }
  
}
module.exports = AnimalShelter;
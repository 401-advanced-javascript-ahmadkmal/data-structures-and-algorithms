'use strict';
const Node = require('./node');
class BinaryTree {
  constructor(root) {
    this.root = root;
  }
  // Root -> Left -> Right
  preOrder() {
    const results = [];
    const _traversal = (node) => {
      results.push(node.value);
      if (node.left) _traversal(node.left);
      if (node.right) _traversal(node.right);
    };
    _traversal(this.root);
    return results;
  }
  // Left -> Root -> Right
  inOrder() {
    const results = [];
    const _traversal = (node) => {
      if (node.left) _traversal(node.left);
      results.push(node.value);
      if (node.right) _traversal(node.right);
    };
    _traversal(this.root);
    return results;
  }
  // Left -> Right -> Root
  postOrder() {
    const results = [];
    const _traversal = (node) => {
      if (node.left) _traversal(node.left);
      if (node.right) _traversal(node.right);
      results.push(node.value);
    };
    _traversal(this.root);
    return results;
  }
}



class BinarySearchTree {
  constructor(root) {
    this.root = root;
  }
  add(val) {
    const node1 = new Node(val);
    let done = false;
    const add_recursion = (node) => {
      if (node.left==null&&!done) {node.left= node1;done=true;}
      if (node.right==null&&!done) {node.right= node1;done=true;}
      if (node.left.value>node1.value&&!done) add_recursion(node.left);
      
      if (node.right&&!done) add_recursion(node.right);
    };
      
    if(this.root){
      add_recursion(this.root);
    }else{
      this.root=node1;
    }
  }

  contain(val) {
    let temp;
    let done = false;
    const find =(node)=>{
      if (node.value===val||node.left.value===val||node.right.value===val){
        done = true;
      }
      if(val<node.left.value&&!done){
        find(node.left);
      }
      if(node.right.value>val&&!done){
        find(node.right);
      }

    };
    find(this.head);
    return done;
  }

 
}
module.exports = {BinaryTree:BinaryTree,BinarySearchTree:BinarySearchTree};
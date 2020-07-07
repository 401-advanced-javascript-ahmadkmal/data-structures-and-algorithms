'use strict';
function FizzBuzzTree(tree){
  const newTree = {...tree};
  const fizzBuzz = (node)=>{
    if (node%3==0&&node%5==0){
      node.value='FizzBuzz';
    }else if(node%3==0){
      node.value='Fizz';
    }else if(node%5==0){
      node.value='Buzz';
    }
  };
  const _traversal = (node) => {
    fizzBuzz(node);
    if (node.left) _traversal(node.left);
    if (node.right) _traversal(node.right);
  };
  _traversal(newTree);
  return newTree;
}
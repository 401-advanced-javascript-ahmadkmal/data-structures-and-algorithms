'use strict';
const stack =require('../stacksAndQueues/stacks-and-queues.js').Stack;
function multiBracketValidation (input) {
  const openArr = ['[', '{', '('];
  const closeArr = [']', '}', ')'];
  const str = input.split('');
  for (let index = 0; index < str.length; index++) {
    if (openArr.includes(str[index])) {
      stack.push(str[index]);
    }else if (closeArr.includes(str[index])) {
      if(openArr.indexOf(stack.pop())!=closeArr.indexOf(str[index])){
        return false;
      }
    }
  }
  return !stack.top;
}

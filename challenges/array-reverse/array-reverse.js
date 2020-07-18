'use strect';

function reverseArray(arr){
  let newArr = [];
  for (let index = 0; index < arr.length; index++) {
    newArr[index]=arr[arr.length-1-index] ;
        
  }
  return newArr;
}
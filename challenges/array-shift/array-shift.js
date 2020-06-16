'use strict';

module.exports= (array,value)=>{
  let newArr=[];
  let added= false;
  for (let index = 0; index < array.length; index++) {
    if (array.length/2===index||array.length/2===index+0.5){
      newArr[index]=value;
      newArr[index+1]=array[index];
      added=true;
    }else if(added){
      newArr[index+1]=array[index];
    }else{
      newArr[index]=array[index];
    }
    
  }
};
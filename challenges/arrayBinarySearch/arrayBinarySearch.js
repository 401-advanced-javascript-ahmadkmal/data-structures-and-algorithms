'use strict';

function BinarySearch(arr,key){
    let l = 0 ;
    let r = arr.length; 
    while(l<=r){
        let m = Math.floor((r+l)/2);
        if (arr[m]<key){
            l = m +1;
        }else if(arr[m]>key){
            r = m-1;
        }else if(arr[m]===key){
            return m;
        }else{
            return (-1);
        }
    }
    return (-1);
}

module.exports = BinarySearch;
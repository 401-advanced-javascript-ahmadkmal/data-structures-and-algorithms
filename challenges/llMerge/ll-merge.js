'use strict';
function mergeLists(list1,list2){
    var currentnode = list1;
    while (currentNode.next) {
        currentNode = currentNode.next;
    }
    currentNode.next=list2;
    return list1;
}
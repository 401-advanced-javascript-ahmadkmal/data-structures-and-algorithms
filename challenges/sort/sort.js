function InsertionSort(arr){
  for (let i = 0; i < arr.length; i++) {
    var j =i -1;
    var temp = arr[i];
    while(j>=0&&temp<arr[j]){
      arr[j+1]=arr[j];
      j=j-1;
    }
    arr[j+1]=temp;
  }
}
module.exports = InsertionSort;
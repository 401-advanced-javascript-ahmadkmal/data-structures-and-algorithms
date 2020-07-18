const hash=(key)=> {
    const sumCharCode = key.split('').reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0);
    console.log(sumCharCode);
    // 19 is a prime number YOU CAN USE ANY OTHER PRIME VALUE
    // since the resulted number can go out of size we will do % size
    const hashKey = (sumCharCode * 19) % this.size;
    return hashKey; // 2000
  }

function leftJoins (synonym,antonyms){
    let arr =[];
    const get=(key)=>{
        const hash = hash(key);
        if(antonyms[hash]){                       
          let currentNode=antonyms.head;
          while(currentNode){
            if(current.value[key]){
                return current.value[key];
              }
              current=current.next;
            }
          
        }
        return 'not exist';
      }
    synonym.forEach(element => {
        let currentNode=element.head;
        
            while(currentNode){
                let synKey = Object.keys(object1)[0];
                let synVal =currentNode.value[synKey];
                let antVal = get(synKey);
                arr.push([synKey,synVal,antVal]);
                current=current.next;
              } 
            
        
    });
    return arr
}
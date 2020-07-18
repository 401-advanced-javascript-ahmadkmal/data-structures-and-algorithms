function repeatedWord(str){
    let arr = [];
    let word = '';
    for (let index = 0; index < str.length; index++) {
      console.log('index=',index,'str.length=',str.length,'arr=',arr);
        if(str[index]=== ' '||str[index]=== ','||str[index]=== '.'){
          console.log(word);
            if(arr.includes(word.toLowerCase())){
                return word.toLowerCase();
            }
            if(word !=''){
              arr.push(word.toLowerCase());
            }
            
            word = '';

        }else{
          word += str[index]
        }
        
    }
}
let str = "It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...";
console.log(repeatedWord(str));
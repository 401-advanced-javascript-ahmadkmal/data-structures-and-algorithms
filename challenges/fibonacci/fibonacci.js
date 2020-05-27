'use strict';
const minimist = require('minimist');
const argv = minimist(process.argv.slice(2));
const fibo = argv.fibo;
// const fiboratio=1.6180339887498948482;
var fiboarr=[0,1];
// console.log(fibo,argv,process.argv);
function fibonacci(fibo){
    for (let index = 2; index <= fibo; index++) {
        fiboarr[index]=fiboarr[index-1]+fiboarr[index-2];
        
    }
    console.log(fiboarr[fibo]);
}

fibonacci(fibo);
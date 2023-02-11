const num = require('numbers');

console.log(num.prime.simple(2));//true
console.log(num.prime.simple(7));//true
console.log(num.prime.simple(1));//false
console.log(num.prime.simple(4));//false

console.log(num.basic.gcd(4,20688780));//4
console.log(num.basic.gcd(5,9232));//1
console.log(num.basic.gcd(0,9232));//9232

//----------------------------------------------

const NumAbbr = require('number-abbreviate');
let numAbbr = new NumAbbr(['k']);

console.log(numAbbr.abbreviate([2000], [0]));//2k
console.log(numAbbr.abbreviate([8000], [0]));//8k

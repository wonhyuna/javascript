//숫자 표기법
let millionaire = 1000000000;
let myNumber = 1e9; //지수표기법

console.log(millionaire);
console.log(myNumber);
console.log(millionaire === myNumber);

console.log(25e5 === 2500000);
console.log(5.3e3 === 5300);
console.log(-6.1e8 === -610000000);

console.log(16e-5 === 0.00016);
console.log(3.5e-3 === 0.0035);
console.log(-9.1e-5 === -0.000091);

//16진법 (Hexadecimal)
let hex1 = 0xff;  //255
let hex2 = 0xFF;  //255

//8진법 (Octal)
let octal = 0o377;

//2진법 (binary numeral system)
let binary = 0b11111111;

console.log(hex1);
console.log(hex2);
console.log(octal);
console.log(binary);

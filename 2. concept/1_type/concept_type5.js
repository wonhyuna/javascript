//형 변환 (Type Conversion)
console.log('10' + '5');  //string 105
console.log(10 + 5);    //number 15

//String, Number, Boolean 함수 사용
console.log(Number('10') + Number('5'));    //number 15
console.log(String(10) + String(5));    //string 105

// 숫자 -> 문자
let x = 123;
console.log(x);
console.log(String(x));
console.log(typeof x);
console.log(typeof String(x));

console.log('');

//불린 -> 문자
let y = true;
console.log(y);
console.log(String(y));
console.log(typeof y);
console.log(typeof String(y));

console.log('');

// 문자 -> 숫자
let z = '문자';
console.log(z);
console.log(Number(z)); //NaN
console.log(typeof z);
console.log(typeof Number(z));

console.log('');

//불린 -> 숫자
let w = true; //true -> 1, false -> 0
console.log(w);
console.log(Number(w));
console.log(typeof w);
console.log(typeof Number(w));

console.log('');

// 문자 -> 불린
let a = '문자';
console.log(a);
console.log(Boolean(a));  //문자가 있으면 true 비었거나 false
console.log(typeof a);
console.log(typeof Boolean(a));

console.log('');

//숫자 -> 불린
let b = 123; 
console.log(b); //숫자가 있으면 true 비었거나 0이거나 NaN이면 false
console.log(Boolean(b));
console.log(typeof b);
console.log(typeof Boolean(b));
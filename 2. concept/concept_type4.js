// typeof 연산자
console.log(typeof 101);
console.log(typeof 'Codeit');
console.log(typeof true);

console.log(typeof 1);
console.log(typeof 1.0);
console.log(typeof '1');
console.log(typeof "1");
console.log(typeof `1`);

let name = 'Codeit';
function sayHello() {
  console.log('Hello');
};

console.log(typeof name);
console.log(typeof sayHello);

console.log(typeof 'Hello' + 'Codeit');  //string  +  Codeit
console.log(typeof 8 - 3);  //number - 3 => NaN (not a number)

//우선순위를 위해 ()를 사용하면 됨
console.log(typeof ('Hello' + 'Codeit')); 
console.log(typeof (8 - 3));

console.log(typeof typeof 8);
//typeof 'number' -> string


//연산자 우선순위
typeof (6 * 2 === 11 || 13 - 7 < 7 && !true);
//1. not (!)
typeof (6 * 2 === 11 || 13 - 7 < 7 && false);
//2. 곱셈
typeof (12 === 11 || 13 - 7 < 7 && false);
//3. 뺄셈
typeof (12 === 11 || 6 < 7 && false);
//4. 비교 연산 (===, <)
typeof (false || true && false);
//5. and연산 (&&)
typeof (false || false);
//6. or연산 (||)
typeof false; //boolean

/*
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
*/
//불 대수 -> 논리
//불 대수의 값 - 진리값 (true, false)
//불 대수의 연산 - and, or, not

/*
AND 연산
x(true) and y(true) -> x and y (true)
x(true) and y(false) -> x and y (false)
x(false) and y(true) -> x and y (false)
x(false) and y(false) -> x and y (false)
*/


/*
OR 연산
x(true) and y(true) -> x and y (true)
x(true) and y(false) -> x and y (true)
x(false) and y(true) -> x and y (true)
x(false) and y(false) -> x and y (false)
*/

/*
NOT 연산
x(true) -> not x (false)
x(false) -> not x (true)
*/

//불린 (Boolean) -> 소문자로만 사용함
console.log(2 > 1); //true
console.log(2 < 1);  //false
console.log(3 >= 2);  //true
console.log(3 <= 3);  //true
console.log(3 === 3);  //true
console.log(3 !== 3);  //false

console.log('Codeit' === 'Codeit');   //true
console.log('Codeit' !== 'Codeeat');   //true

//and 연산자 (&&)
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

//or 연산자 (||)
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

//not 연산자 (!)
console.log(!true);
console.log(!false);

//not 연산자 두 번 사용 (!!)
console.log(!!true);
console.log(!!false);
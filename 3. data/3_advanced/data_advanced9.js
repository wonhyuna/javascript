//var 특징
//var은 여러 줄에 걸쳐서 선언 가능
var myVariable;
myVariable = 'codeit';

//한 줄도 가능
var myVariable = 'codeit';

//중복 선언 허용 (let 선언한 변수에 값을 재할당하는 것과는 다름)
var myVariable = 'codeit';
console.log(myVariable);

var myVariable = 'Codeit!';
console.log(myVariable);

//함수 스코프
//let과 const는 if, for, function 등 {}로 감싸진 부분을 기준으로 
{
  let x = 3;
}

function myFunction() {
  let y = 4;
}

console.log(x);   //x 오류
console.log(y);

//var은 function에서만 구분됨 -> if, for, while, switch 에서 사용되면 전역변수 역할을 하게 될 수 있음
{
  var x = 3;
}

function myFunction() {
  var y = 4;
}

console.log(x);
console.log(y);   //y 오류

//끌어올림
console.log(myVariable);    //myVariable이 없다고 오류가 남
let myVariable;

console.log(myVariable);    //undefined 오류 X
var myVariable;

console.log(myVariable);    //undefined
var myVariable = 2;
console.log(myVariable);    //2

//함수에서도 끌어올림(호이스팅) 적용
sayHi();

function sayHi() {
  console.log('hi');
}
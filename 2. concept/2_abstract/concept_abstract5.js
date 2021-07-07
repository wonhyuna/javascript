//Scope: 범위, 영역
function myFunction(){ //블록문 (block statement)
  let x = 3;  //로컬 변수, 지역 변수 (local variable)
  console.log(x);
}

myFunction();
//console.log(x); //x는 함수 안에 있는 지역 변수 -> 오류 발생


let y = 3;  //글로벌 변수, 전역 변수 (global variable)
function myFunction(){ //블록문 (block statement)
  console.log(y);
}

myFunction();
console.log(y); //y는 전역변수


let z = 3;  //글로벌 변수, 전역 변수 (global variable)
function myFunction(){ //블록문 (block statement)
  let w = 5;  //로컬 변수, 지역 변수 (local variable)
  console.log(w); 
}

myFunction();
console.log(z); //z는 전역변수
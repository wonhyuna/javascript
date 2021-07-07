//상수(constant) -> 대문자와 _ 이용하기 / 변수 지정 안 해주면 오류 발생
//선언과 초기화를 별개로 나눠서 할 수 없고 같이 해줘야 함
const PI = 3.14;  //원주율 - 변하지 않을 때 const 사용
let radius = 0; //반지름 초기화 (빈 값 - 상수: 0, 문자: '')

// PI = 3; //재정의 불가능

//원의 넓이를 계산하는 함수
function calculateArea(){
  return PI *  radius * radius;
}

//반지름에 따른 원의 넓이를 출력하는 함수
function printArea(){
  return `반지름이 ${radius}일 때, 원의 넓이는 ${calculateArea()}`;
}

radius = 4;
console.log(printArea());

radius = 7;
console.log(printArea());

radius = 8;
console.log(printArea());
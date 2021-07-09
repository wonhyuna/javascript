//for..in
/*
for (변수 in 객체){
  동작부분
}
*/
let codeit ={
  name: '코드잇',
  bornYear: 2017,
  isVeryNice: true,
  worstCourse: null,
  bestCourse: '자바스크립트 프로그래밍 기초'
}

for (let key in codeit){
  console.log(key);   //property name을 다 출력함
  console.log(codeit[key]);  //property name에 해당하는 value를 다 출력함
}

//객체의 프로퍼티 네임의 예외사항과 객체의 정렬 방식 알기
//1. 숫자형(양수) 프로퍼티 네임
let myObject = {
  300: '정수',
  1.2: '소수',
};
for (let key in myObject) {
  console.log(`${key}의 자료형은 ${typeof key}입니다.`);
}

//이럴 때는 파라미터 네임에 접근할 때도 대괄호표기법으로만 접근 가능
console.log(myObject['300']);
console.log(myObject['1.2']);
//console.log(myObject.300); //오류 발생
//console.log(myObject.1.2); //오류 발생

//2. 정수형 프로퍼티 네임
let myObj = {
  3: '정수3',
  name: 'codeit',
  1: '정수1',
  birthDay: '2017.5.17',
  2: '정수2',
};

for (let key in myObj) {
  console.log(key);
}
//정수형 프로퍼티 네임을 오름차순으로 먼저 정렬한 후, 나머지 프로퍼티들은 추가한 순서대로 정렬

let myO = {
  '3': '정수3',
  name: 'codeit',
  '1': '정수1',
  birthDay: '2017.5.17',
  '2': '정수2',
};

for (let key in myO) {
  console.log(key);
}
//이렇게 따옴표를 붙여 문자열처럼 만들더라도, 정렬방식은 동일하게 처리됨
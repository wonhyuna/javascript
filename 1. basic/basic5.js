/*
//함수 선언
function 함수이름(파라미터, 파라미터) {
  console.log(파라미터 연산한 것);
}

//함수 호출
함수이름(값, 값)
*/

//함수 선언1
function printSum(num1, num2){
  console.log(num1 + num2);
};

//함수 호출1
printSum(10, 5);
printSum(123, 4);
printSum(56, 7890);

//함수 선언2
function introduce(name, birth, nationality, job){
  console.log('안녕하세요! 반갑습니다.');
  console.log('제 이름은 ' + name + ' 입니다.');
  console.log('생년월일은 ' + birth + ' 이고,');
  console.log('국적은 ' + nationality + ' 입니다.');
  console.log('직업은 ' + job + ' 입니다.');
  console.log('잘 부탁드립니다!');
};

//함수 호출2
introduce('코드잇', '17.05.18', '한국', '프로그래밍 강사');
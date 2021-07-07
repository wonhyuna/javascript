//반복문 (loop statement)
//for문 (for statement)
/*
for (초기화부분; 조건부분; 추가동작부분){
  동작부분
}
*/

for (let i = 1; i <= 10; i++){
  console.log(`${i} 코드잇 최고!`);
}

//추가동작부분을 꼭 채울 필요는 없다.
for (let i = 1; i <= 10;) {
  console.log(`${i} 코드잇 최고!`);
  i++;
}

//초기화부분에서 생성한 변수는 for문의 로컬 변수이다.
for (let i = 1; i <= 10; i++) {
  console.log(`${i} 코드잇 최고!`);
}

//console.log(i); //오류 발생 -> i는 지역변수이므로

//초기화부분도 반드시 채울 필요는 없다.
let i = 1; 
for (; i <= 10; i++) {  //;는 무조건 작성해 주어야 함
  console.log(`${i} 코드잇 최고!`);
}
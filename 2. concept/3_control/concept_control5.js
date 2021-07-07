//while문 (while statement)
/*
while(조건부분){
  동작부분 // 추가부분도 작성하기
}
*/
let a = 1;
while (a <= 10){
  console.log(`${a} 코드잇 최고!`);
  a++;
}

for (let b = 1; b <= 10; b++){
  console.log(`${b} 코드잇 최고!`);
}


let i = 30; //전역변수일 때 보통 while문을 사용함
while (i % 7 !== 0){
  i++;
}
console.log(i);
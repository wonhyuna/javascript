// switch문 (switch statement)
/*
switch(비교할 값) {
  case 조건값1:
    동작부분;
    break;
  case 조건값2:
    동작부분;
    break;
  default:
    동작부분;
}
*/
let myChoice = 2;
switch(myChoice){
  case 1:
    console.log('토끼를 선택한 당신, ...');
    break;  //break가 없으면 해당되는 부분부터 아래 모든 동작을 다 실행함
  case 2:
    console.log('고양이를 선택한 당신, ...');
    break;
  case 3:
    console.log('코알라를 선택한 당신, ...');
    break;
  case 4:
    console.log('강아지를 선택한 당신, ...');
    break;
  default:
    console.log('1에서 4 사이의 숫자를 선택해 주세요.');
}

if (myChoice === 1) {
  console.log('토끼를 선택한 당신, ...');
} else if (myChoice === 2) {
  console.log('고양이를 선택한 당신, ...');
} else if (myChoice === 3) {
  console.log('코알라를 선택한 당신, ...');
} else if (myChoice === 4) {
  console.log('강아지를 선택한 당신, ...');
} else {
  console.log('1에서 4사이의 숫자를 선택해 주세요.');
}

console.log('2' === 2); //false
console.log(2 === 2);  //true
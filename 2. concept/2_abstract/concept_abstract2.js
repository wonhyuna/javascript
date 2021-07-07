function logParticipant(name){
  console.log(name + "(이)가 대화에 참여했습니다.");
};

// 테스트 코드
logParticipant('동수');
logParticipant('윤하');
logParticipant('재준');
logParticipant('동훈');
logParticipant('영희');
logParticipant('신욱');

function expressMultiplication(num1, num2){
  console.log(`${num1} * ${num2} = `+ num1 * num2);
};

// 테스트 코드
expressMultiplication(3, 4);
expressMultiplication(3, 2);
expressMultiplication(7, 5);
expressMultiplication(8, 9);
expressMultiplication(5, 5);
expressMultiplication(9, 9);
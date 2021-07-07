//1이상 100이하 짝수 출력

for (let i = 1; i <= 100; i++){
  if (i % 2 == 0){
    console.log(`${i}`);
  }
}

for (let i = 1; i <= 50; i++) {
  console.log(i * 2);
}

for (let i = 2; i <= 100; i += 2) {
  console.log(i);
}



function printTriangle(height) {
  let message = "";
	for(let i = 1; i <= height; i++){
    message += "*";
    console.log(`${message}`);
  }
}

// 테스트 코드
console.log('높이: 1');
printTriangle(1);

console.log('높이: 3');
printTriangle(3);

console.log('높이: 5');
printTriangle(5);
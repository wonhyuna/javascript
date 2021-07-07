//1부터 100까지 홀수 출력
let i = 1;
while (i <= 100){
  if(i % 2 == 1){
    console.log(i);
  }
  i++;
}

let j = 1;

while (j <= 50) {
  console.log(j * 2 - 1);
  j++;
}

let k = 1;

while (k <= 100) {
  console.log(k);
  k += 2;
}


//정수 N의 약수와 개수 구하기
const N = 180;
let n = 1;
let count = 0;
while (n <= N){
  if (N % n === 0){
    console.log(n);
    count++;
  }
  n++;
}
console.log(`${N}의 약수는 총 ${count}개입니다.`);
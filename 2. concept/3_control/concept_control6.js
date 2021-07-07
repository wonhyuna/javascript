// break문 -> 빠져나오게 함
let i = 1;
while (i <= 10){
  console.log(i);
  i++;
  break;  //i는 1까지만 출력하고 끝냄
}

let j = 1;
while(j <= 10){
  console.log(j);
  if (j === 7){
    break;
  }
  j++;
}

for (let k = 1; k <= 10; k++){
  console.log(k);
  if (k === 7){
    break;
  }
}

//continue문 -> 다음 단계로 넘어가게 함
for (let x = 1; x <= 10; x++){
  if (x % 2 === 0){
    continue; //2의 배수인 것은 넘어감
  }
  console.log(x);
}

let y = 1;
while (y <= 10){
  if (y % 2 === 0){
    y++;
    continue;
  }
  console.log(y);
  y++;
}
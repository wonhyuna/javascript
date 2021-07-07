//구구단 -> 중첩 반복문
for (let i = 1; i < 10; i++){
  for (let j = 1; j < 10; j++){
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

let x = 1;
while(x <= 9){
  let y = 1;
  while(y <= 9){
    console.log(`${x} * ${y} = ${x * y}`);
    y++;
  }
  x++;
}
function factorial(n) {
  let result = 1;
	if (n == 0){
    result = 1;
  }else{
    while(n !== 1){
      result *= n;
      n--;
    }
  }

  return result;
}

function factorial(n){
  let result = 1;
  for (let i = n; i >= 1; i--){
    result = result * i;
  }
  return result;
}

// 테스트 코드
console.log(factorial(12));
console.log(factorial(6));
console.log(factorial(3));
console.log(factorial(0));
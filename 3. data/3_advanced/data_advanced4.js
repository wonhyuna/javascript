let sum = 0.1 + 0.2;
console.log(sum);

//값이 0.3이 아닌 다른 값이 나온 이유?
//2진수로 변경해서 계산하므로 어느 정도 선에서 반올림한다.
//이 반올림에 의해 약간의 오차가 발생하는 것

console.log(sum.toFixed(1)); //문자열
console.log(+sum.toFixed(1)); //숫자
console.log(Math.round(sum * 10) / 10);  // 반올림
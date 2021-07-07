//return문 -> 값 도출, 함수 실행 중단
function square(x){
  console.log('return 전');
  return x * x;
  console.log('return 후'); //Dead code
}

console.log('함수 호출 전');
console.log(square(3));
console.log('함수 호출 후');

//return문과 console.log의 차이
function printSquare(x){
  console.log(x * x);
};

function getSquare(x){
  return x * x;
};

printSquare(3); 
getSquare(3); //출력되는 값이 없음
console.log(getSquare(3)); //9
console.log(printSquare(3)); //return값이 없으므로 undefined

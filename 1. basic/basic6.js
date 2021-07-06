//input(파라미터) -> function -> output(return 값)

function getTwo(){
  return 2;
}
console.log(getTwo());  //2

function getTwice(number){
  return number * 2;
}

console.log(getTwice(5));

let x = getTwice(5);
let y = getTwice(2);

console.log(x * y);
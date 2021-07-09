//Number 메소드

//toFixed(0~100)
let myNumber = 0.3591;
console.log(myNumber.toFixed(3)); //0.359
console.log(myNumber.toFixed(7)); //0.3591000
console.log(typeof myNumber.toFixed(7)); //string
console.log(Number(myNumber.toFixed(7))); //number로 바뀜
console.log(+myNumber.toFixed(2));  //+만 붙여도 number로 바뀜

//toString(2~36)
let myNum = 255;
console.log(myNum.toString(2)); //2진수로 변환, string
console.log(myNum.toString(8)); //8진수로 변환, string
console.log(myNum.toString(16)); //16진수로 변환, string

//정수형태에 메소드를 사용하면 .. 점 두개 사용하기
console.log(255..toString(2)); 
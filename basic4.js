//console.log(값)  값: 파라미터(매개변수)
//함수 선언
/*
function 함수이름(파라미터->값){
  console.log(파라미터->값);
};

//함수 호출
함수이름(값);
*/

//함수 선언1
function greetings(sentence) {
  console.log('Hi!');
  console.log('안녕!');
  console.log('Guten Tag!');
  console.log('Bonjour!');
  console.log('Buongiorno!');
  console.log(sentence);
};

//함수 호출1
greetings('Hola');
//Hola -> 값 -> 파라미터(sentence)


//함수 선언2
function welcome(name){
  console.log('안녕하세요 ' + name + '님!');
};

//함수 호출2
welcome('코드잇');
welcome('서은광');
welcome('이창섭');

//함수 선언3
function printSquare(x){
  console.log(x * x);
};

//함수 호출3
printSquare(2);
printSquare(5);
printSquare(6);
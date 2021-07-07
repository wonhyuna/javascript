//파라미터
function sayHello(name){
  console.log(`안녕하세요 ${name}님!`);
}

sayHello('코드잇');
sayHello('좋아요');
sayHello('사랑해');
sayHello(); //안녕하세요 undefined님!

//옵셔널 파라미터 -> 기본적으로 정의하는 파라미터
function introduce(name, age, nationality = '한국'){
  console.log(`제 이름은 ${name}입니다.`);
  console.log(`나이는 ${age}살 이고,`);
  console.log(`국적은 ${nationality}입니다.`);
}

introduce('코드잇', 4, '미국');  //값을 모두 전달한 경우
console.log('');
introduce('코드잇', 4);  //파라미터 값을 생략한 경우 (무조건 순서대로)


function introduce1(name, nationality = '한국', age){
  console.log(`제 이름은 ${name}입니다.`);
  console.log(`나이는 ${age}살 이고,`);
  console.log(`국적은 ${nationality}입니다.`);
}

introduce1('코드잇', '미국', 4);  //값을 모두 전달한 경우
console.log('');
introduce1('코드잇', 4);  //파라미터 값을 생략한 경우 (옵셔널 파라미터는 가장 뒤로)
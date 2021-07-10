//const, 변수와 상수 사이
//let은 재할당 가능
let x = 1;
console.log(x);
x = 2;
console.log(x);

//const는 재할당 불가능
const y = 3;
console.log(y);
y = 4;
console.log(y);

//검색창에 작성하는 단수는 변수여도 상수라고 할 수 있음 (변수->상수 변경)

//const 변수 vs const 상수
//변수 -> 영어소문자(name), 여러 단어 합쳐지면 2번째 단어부터는 대문자 (myName)
//상수 -> 영어대문자(NAME), 여러 단어 합쳐지면 밑줄 사용 (MY_NAME)

//객체는 const 키로 선언을 했더라도 변수가 변할 수 있음
console.log(m);
const m = {name: 'Codeit'};
m.birth = 2017;
console.log(m);
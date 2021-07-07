//형 변환 (Type Conversion)
//산술 연산 (+, -, *, /, %, **)
console.log(4 + '2'); //42
console.log(4 + 2);  //6
console.log(4 - true);  //3
console.log(4 * false); //0
console.log(4 / '2');  //2
console.log('4' ** true);  //4
console.log(4 % 'two');  //NaN

//관계 비교 연산 (<, <=, >, >=)
console.log(2 < '3'); // true
console.log(2 > true);  //2 > 1 true
console.log('2' <= false);  //2 <= 0 false
console.log('two' >= 1); //NaN >= 1 (비교 불가) -> false

//같음 비교 연산 (===, !==, ==, !=)
console.log(1 === '1'); //일치, 불일치(!==) -> 형 변환X -> false
console.log(1 === true)
console.log(1 == '1'); //동등, 부등(!=) -> 형 변환 -> true
console.log(1 == true)

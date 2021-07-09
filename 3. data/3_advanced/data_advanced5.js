//String
let myString = ' Hi Codeit ';

//문자열 길이
console.log(myString.length); //length 프로퍼티

//요소 접근
console.log(myString[3]); //대괄호 표기법
console.log(myString.charAt(3)); //charAt 메소드

//요소 탐색
console.log(myString.indexOf('a'));   //앞부터  / 없으면 -1
console.log(myString.lastIndexOf('i'));   //뒤부터

//대소문자 변환
console.log(myString.toUpperCase());  //대문자
console.log(myString.toLowerCase());  //소문자

//양 끝 공백 제거
console.log(myString.trim()); //공백 제거

//부분 문자열 접근 slice(start, end)
console.log(myString.slice(0, 3));
console.log(myString.slice(3));
console.log(myString.slice());

//문자열과 배열
//비슷한 점
let myStr = 'Codeit';

for (let str of myStr) {
  console.log(str);
}

//다른 점
let mystr = 'Codeit';
let myarr = ['C', 'o', 'd', 'e', 'i', 't'];

console.log(typeof mystr);
console.log(typeof myarr);

console.log(mystr === myarr);
console.log(mystr == myarr);

//mutable vs immutable
// 배열은 mutable (변하기 쉬운)
let arr = ['C', 'o', 'd', 'e', 'i', 't'];
arr[0] = 'B';
console.log(arr);

// 문자열은 immutable (불변)
let str = 'Codeit';
str[0] = 'B';
console.log(str);
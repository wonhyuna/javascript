//문자열 -> 따옴표 필요 (반드시 같은 종류로 열고 닫아야 함)
console.log("코드잇");
console.log('코드잇');
//console.log(코드잇); -> 오류
//console.log('코드잇"); -> 오류

//오류
/*
console.log('I'm Iron man'); 
console.log("He said "I'm Iron man"");
*/

//해결 -> 따옴표 종류 바꾸기
console.log ("I'm Iron man"); 
//해결 -> \ 사용하기 (\사용하면 문자열로 인식함)
console.log("He said \"I'm Iron man\"");
console.log('He said "I\'m Iron man"');
console.log("He said \"I\'m Iron man\"");
console.log('He said \"I\'m Iron man\"');
//해결 -> `` 사용하기
console.log(`He said "I'm Iron man"`);

//문자열 + -> 연결
console.log('Hello' + 'Codeit');
console.log('3' + '5'); //35

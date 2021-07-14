const str = 'Codeit';
const num = 123;
const bool = true;
const arr = [1, 2, 3];
const obj = {
  name: 'Codeit',
  email: 'codeit@codeit.kr',
};

function func() {
  console.log('I love Codeit!');
}

//1. 출력하는 자료형이 다름 (dir -> 문자열 표시 형식으로 출력됨)
//2. log는 값 자체에(펼쳐지지 않음), dir은 객체의 속성에(객체 유형+속성 펼쳐서 봐야 함)
//3. log는 여러 개, dir은 하나만(여러 값을 쉼표로 구분해 전달했을 때 출력되는 것)
//4. DOM 객체를 다룰 때 (log는 html형태로 출력, dir은 객체로 출력)

console.log('--- str ---');
console.log(str);   
console.dir(str);   
console.log('--- num ---');
console.log(num);
console.dir(num);
console.log('--- bool ---');
console.log(bool);
console.dir(bool);
console.log('--- arr ---');
console.log(arr);
console.dir(arr);
console.log('--- obj ---');
console.log(obj);
console.dir(obj);
console.log('--- func ---');
console.log(func);
console.dir(func);
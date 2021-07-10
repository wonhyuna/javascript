//기본형과 참조형
//기본형(primitive type): number, string, boolean, null, undefined
//참조형 : object

//기본형 (변수 = 값)
let x = 3;
let y = x;

console.log(x);
console.log(y);
y = 5;
console.log(x);
console.log(y);

//참조형: 객체, 배열 (변수 = 주소)
let x = {name: 'Codeit'};
let y = x;

console.log(x);
console.log(y);

y.birth = 2017;

console.log(x); //x도 birth가 생성됨 (주소값으로 작용하므로)
console.log(y);

let m = [1, 2, 3];
let n = m;

console.log(m);
console.log(n);

n[2] = 4;

console.log(m); //m도 수정됨 (주소값으로 작용하므로)
console.log(n);


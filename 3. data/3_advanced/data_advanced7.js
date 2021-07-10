//참조형 복사하기 (Reference Type Copy)
let numbers1 = [1, 2, 3];
let numbers2 = numbers1.slice();  //slice를 추가하면 값만 복사됨 (주소X)

numbers2.push(4);

console.log(numbers1);
console.log(numbers2);

let course1 = {
  title: '파이썬 프로그래밍 기초',
  language: 'Python',
  prerequisite: []    //함수로 object를 값만 복사했어도 배열이 있어서 문제가 생김
};

let course2 = Object.assign({}, course1);

function cloneObject(object){
  let temp = {};
  for (let key in object){
    temp[key] = object[key];
  }
  return temp;
}

let course3 = cloneObject(course1);

course2.title = '알고리즘의 정석';
course3.title = '자료구조';

console.log(course1);
console.log(course2);
console.log(course3);
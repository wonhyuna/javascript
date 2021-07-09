//객체 (Object) -> 여러 가지의 값을 저장
/*
{
  값 이름(name) key: value, //속성 property 
  값 이름(name) key: value
} 
*/
//property name -> 문자열 
//(따옴표 생략 시 1. 첫 번째 글자는 문자, _, $ 사용 & 띄어쓰기 금지 & - 금지)
//따옴표 있으면 상관 없음

//property value는 자료형 상관 없음 (문자열, 숫자, 불린형, 객체 등 다 가능)

//객체 (Object)
let codeit ={
  name: '코드잇',
  bornYear: 2017,
  isVeryNice: true,
  'worst Course': null,
  bestCourse: {
    title: '자바스크립트 프로그래밍 기초',
    language: 'JavaScript'
  }
}

//점 표기법 (objectName.propertyName)
console.log(codeit.bornYear);

//대괄호 표기법 (objectName['propertyName'])
console.log(codeit['worst Course']); //property name에 띄어쓰기나 숫자가 처음에 있을 때
console.log(codeit['worst' + ' Course']);

//변수 사용
let propertyName = 'name';
console.log(codeit[propertyName]);

//객체 안의 객체
console.log(codeit.bestCourse.title);
console.log(codeit.bestCourse['title']);

//존재하지 않는 property에 접근하면? undefined
console.log(codeit.bestCourse['teacher']);
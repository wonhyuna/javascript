//객체 (Object)
let codeit ={
  name: '코드잇',
  bornYear: 2017,
  isVeryNice: true,
  worstCourse: null,
  bestCourse: {
    title: '자바스크립트 프로그래밍 기초',
    language: 'JavaScript'
  }
}

console.log(codeit.name);
codeit.name = 'codeit';   //name 수정
console.log(codeit.name);

console.log(codeit.ceo);
codeit.ceo = '강영훈';    //ceo 추가
console.log(codeit.ceo);

console.log(codeit.worstCourse);
delete codeit.worstCourse;  //worstCourse 삭제
console.log(codeit.worstCourse);
console.log(codeit);      //전체 객체에서도 삭제됨


codeit.worstCourse = undefined;

//property 확인1
console.log(codeit.worstCourse !== undefined); //객체 안에 worstCourse이 있는지
//할당값이 undefined일 수 있으므로 -> 확인2 방법 사용하기

//property 확인2
//propertyName in object
console.log('worstCourse' in codeit); //객체 안에 worstCourse이 있는지

if ('name' in codeit) {
  console.log( `name 값은 ${codeit.name}입니다.`);
}else {
  console.log('name 프로퍼티는 존재하지 않습니다.');
}
//Dom (Document Object Model) 문서 객체 모델 -> 웹페이지를 객체로 표현
console.log(document);  //html태그가 출력됨
console.log(typeof document);   //object이지만 html태그가 출력됨
console.dir(document);    //객체 형태로 다양한 프로퍼티 출력됨

const title = document.querySelector('#title');
//콘솔창에서 title을 치면 해당 태그가 출력됨
//title.style.color = 'red';  하면 해당 태그가 빨간색 글씨로 바뀜

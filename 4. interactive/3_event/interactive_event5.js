//표준 DOM 이벤트에서 정의한 이벤트 흐름의 3단계
//1. 캡처링: 이벤트가 하위 요소로 전파되는 단계
//2. 타깃: 이벤트가 실제 타깃 요소에 전달되는 단계
//3. 버블링: 이벤트가 상위 요소로 전파되는 단계
//window -> document -> html -> body -> ... -> target 태그

for (let elem of document.querySelectorAll('*')) {
  elem.addEventListener("click", e => alert(`캡쳐링 단계: ${elem.tagName}`), true);
  elem.addEventListener("click", e => alert(`버블링 단계: ${elem.tagName}`));
}


//이벤트 버블링 퀴즈(li -> main)
//target -> 이벤트를 발생시킨 요소, currentTarget -> 이벤트 핸들러가 binding된 요소
const main = document.querySelector('#main');
const toDoList = main.lastElementChild;

function printCurrentTarget(event) {
  console.log(event.currentTarget);
}

main.addEventListener('click', printCurrentTarget);

for (let child of toDoList.children) {
  child.addEventListener('click', printCurrentTarget);
}
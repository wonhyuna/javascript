// 이벤트 객체 (Event Object)
const myInput = document.querySelector('#myInput');
const myBtn = document.querySelector('#myBtn');

function printEvent(event) {
  console.log(event);   //KeyboardEvent이나 MouseEvent가 출력됨
	event.target.style.color = 'red';   //target => input#myInput 등, type => keydown
}

myInput.addEventListener('keydown', printEvent);
/*
myInput.addEventListener('keydown', function (){
  console.log('KeyboardEvent');
}) 
*/
myBtn.addEventListener('click', printEvent);
/*
myInput.addEventListener('click', function (){
  console.log('MouseEvent');
}) 
*/


/*
공통 프로퍼티
type:	이벤트 이름 ('click', 'mouseup', 'keydown' 등)
target:	이벤트가 발생한 요소
currentTarget:	이벤트 핸들러가 등록된 요소
timeStamp:	이벤트 발생 시각(페이지가 로드된 이후부터 경과한 밀리초)
bubbles:	버블링 단계인지를 판단하는 값
*/

/*
마우스 이벤트
button:	누른 마우스의 버튼 (0: 왼쪽, 1: 가운데(휠), 2: 오른쪽)
clientX, clientY:	마우스 커서의 브라우저 표시 영역에서의 위치
pageX, pageY:	마우스 커서의 문서 영역에서의 위치
offsetX, offsetY:	마우스 커서의 이벤트 발생한 요소에서의 위치
screenX, screenY:	마우스 커서의 모니터 화면 영역에서의 위치
altKey:	이벤트가 발생할 때 alt키를 눌렀는지
ctrlKey:	이벤트가 발생할 때 ctrl키를 눌렀는지
shiftKey:	이벤트가 발생할 때 shift키를 눌렀는지
metaKey:	이벤트가 발생할 때 meta키를 눌렀는지 (window는 window키, mac은 cmd키)
*/


/*
키보드 이벤트
key:	누른 키가 가지고 있는 값
code:	누른 키의 물리적인 위치
altKey:	이벤트가 발생할 때 alt키를 눌렀는지
ctrlKey:	이벤트가 발생할 때 ctrl키를 눌렀는지
shiftKey:	이벤트가 발생할 때 shift키를 눌렀는지
metaKey:	이벤트가 발생할 때 meta키를 눌렀는지 (window는 window키, mac은 cmd키)
*/

//https://developer.mozilla.org/en-US/docs/Web/API/Event
//https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
//https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent

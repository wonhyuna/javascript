// 이벤트(Event)와 버튼 클릭
const btn = document.querySelector('#grade');
//다양하게 표현 가능
/*
document.querySelector('button');
document.querySelectorAll('button')[0];
document.getElementsByTagName('button')[0];
*/

// 이벤트 핸들링(Event Handling)
btn.onclick = function() { // 이벤트 핸들러(Event Handler)
	alert("정답입니다!👏🏻");
};
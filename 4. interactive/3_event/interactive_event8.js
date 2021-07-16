// 브라우저의 기본 동작
const link = document.querySelector('#link');
const checkbox = document.querySelector('#checkbox');
const input = document.querySelector('#input');
const text = document.querySelector('#text');


//event.preventDefault (브라우저의 기본 동작을 막음)
link.addEventListener('click', function(e) {  
	e.preventDefault();         //link 클릭 시 이동이 막힘
	alert('지금은 이동할 수 없습니다.');
});

input.addEventListener('keydown', function(e) {
	if (!checkbox.checked) {
		e.preventDefault();       //체크되지 않았을 때 input이 막힘
		alert('체크박스를 먼저 체크해 주세요.');
	}
});

document.addEventListener('contextmenu', function(e) {
	e.preventDefault();         //마우스 우클릭 방지
	alert('마우스 오른쪽 클릭은 사용할 수 없습니다.');
});
// 이벤트 위임 (Event Delegation)
const list = document.querySelector('#list');

for (let item of list.children){
  item.addEventListener('click', function(e){
    e.target.classList.toggle('done');
  });
} //처음에 없던 것을 추가하면 이 부분이 적용이 안 됨 -> 버블링 사용

list.addEventListener('click', function(e) {  //부모에 한 번에 적용
	// if (e.target.tagName === 'LI')
	if (e.target.classList.contains('item')) {  //list를 눌러도 적용되므로 item만 적용하도록 작성함
		e.target.classList.toggle('done');
	}
});

const li = document.createElement('li');
li.classList.add('item');
li.textContent = '일기 쓰기';
list.append(li);
li.addEventListener('click', function(e) {
  e.stopPropagation();
}); //이벤트 버블링을 막아서 '일기 쓰기' 부분은 안 됨
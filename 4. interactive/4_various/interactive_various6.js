// showTitle 함수를 완성해 주세요.
function showTitle(e) {
	if(e.target.dataset.title){ //data-title일 때
    const span = document.createElement('span');
    span.classList.toggle('title');
    span.textContent = e.target.dataset.title;
    e.target.append(span);
  }

}

// removeTitle 함수를 완성해 주세요.
function removeTitle(e) {
	if(e.target.dataset.title){
    e.target.lastElementChild.remove();
  }
}

const map = document.querySelector('.map');
// '대상'과 '타입'을 수정해 주세요. 
map.addEventListener('mouseover', showTitle);
map.addEventListener('mouseout', removeTitle);

//타입 -> 버블링 일어나고 자식 요소 노드 구분함
//->이벤트 위임이나 자식 요소의 영역에서도 이벤트가 발생되길 원할 때 사용함
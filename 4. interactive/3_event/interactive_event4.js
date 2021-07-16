// 이벤트 버블링 (Event Bubbling) 
//->해당 부분 뿐만 아니라 부모 부분도 이벤트가 발생하는 현상
const content = document.querySelector('#content');
const title = document.querySelector('#title');
const list = document.querySelector('#list');
const items = document.querySelectorAll('.item');

content.addEventListener('click', function(e) {
  console.log('content Event');
  console.log(e.currentTarget);   //이벤트 타깃이 일어난 부분 출력
});

title.addEventListener('click', function(e) {
  console.log('title Event');
  console.log(e.currentTarget); //title -> content
});

list.addEventListener('click', function(e) {
  console.log('list Event');
  console.log(e.currentTarget); //list -> content
});

for (let item of items) {
  item.addEventListener('click', function(e) {
    console.log('item Event');
    console.log(e.currentTarget); //item -> 버블링X
		e.stopPropagation();    //item에서 버블링 멈추는 방법
  });
}
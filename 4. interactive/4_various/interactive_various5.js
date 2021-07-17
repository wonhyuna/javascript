const box1 = document.querySelector('#box1');
const box2 = document.querySelector('#box2');

let mouseenterCount = 0;
let mouseoverCount = 0;

box1.addEventListener('mouseover', function (){
  mouseenterCount++;
  const msg = `mouseover event count: ${mouseenterCount}`;
  box1.firstElementChild.textContent = msg;
});

  box2.addEventListener('mouseenter', function (){
  mouseoverCount++;
  const msg = `mouseenter event count: ${mouseoverCount}`;
  box2.lastElementChild.textContent = msg;
});


//mouseover - mouseenter: 마우스 포인터가 요소 바깥에서 안쪽으로 들어갈 때
//mouseout - mouseleave: 마우스 포인터가 요소 안 쪽에서 바깥으로 나갈 때

//1. 버블링이 일어나지 않는다.
//mouseenter와 mouseleave는 버블링이 일어나지 않는다.
//->mouseover에서 버블링이 일어나 자식요소로 움직이면 두 번 이벤트 발생

//2. 자식 요소의 영역을 계산하지 않는다.
//mouseenter와 mouseleave는 자식 요소의 영역을 계산하지 않는다.
//버블링과 연결된 의미


//이벤트 핸들러가 자식 요소에까지 영향을 끼치게 하고싶은 경우에는 mouseover/mouseout
//자식 요소에는 영향을 끼치지 않고 해당 요소에만 이벤트 핸들러를 다루고자 한다면 mouseenter/mouseleave를 활용
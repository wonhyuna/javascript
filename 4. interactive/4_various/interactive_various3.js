/** 
 * [마우스 이동 이벤트]
 * 
 * > MouseEvent.type
 * mousemove: 마우스 포인터가 이동할 때
 * mouseover: 마우스 포인터가 요소 밖에서 안으로 이동할 때
 * mouseout: 마우스 포인터가 요소 안에서 밖으로 이동할 때 
 *
 * > MouseEvent.clientX, clientY
 * : 화면에 표시되는 창 기준 마우스 포인터 위치 
 * ->스크롤 위치와는 무관하게 항상 보여지는 화면의 좌측 상단의 모서리 위치를 (0, 0)으로 계산  
 * 
 * > MouseEvent.pageX, pageY
 * : 웹 문서 전체 기준 마우스 포인터 위치
 * ->전체 문서를 기준으로 마우스 좌표 정보 담음 (스크롤로 인해 보이지 않게 된 화면까지 포함해서 측정)
 * 
 * > MouseEvent.offsetX, offsetY
 * : 이벤트가 발생한 요소 기준 마우스 포인터 위치
 * ->스크롤 위치와는 무관하게 항상 대상(요소)의 좌측 상단의 모서리 위치를 (0, 0)으로 계산
 */
 
 const box1 = document.querySelector('#box1');

 function onMouseMove(e) {  //위치 정보 출력
   console.log(`client: (${e.clientX}, ${e.clientY})`);
   console.log(`page: (${e.pageX}, ${e.pageY})`);
   console.log(`offset: (${e.offsetX}, ${e.offsetY})`);
   console.log('------------------------------------');
 }
 
 box1.addEventListener('mousemove', onMouseMove);
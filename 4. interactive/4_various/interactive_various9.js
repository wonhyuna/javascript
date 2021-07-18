/**
 * [input 태그 다루기]
 *  
 * > 포커스 이벤트
 * focusin: 요소에 포커스가 되었을 때: 선택될 때
 * focusout: 요소에 포커스가 빠져나갈 때: 선택 해제될 때
 * focus: 요소에 포커스가 되었을 때 (버블링 x): form 같이 높은 우위에 있는 이벤트 핸들러X
 * -> username 같은 낮은 우위(세부적)일 때 이에 한해서 일어남
 * blur: 요소에 포커스가 빠져나갈 때 (버블링 x): form 같이 높은 우위에 있는 이벤트 핸들러X
 * -> username 같은 낮은 우위(세부적)일 때 이에 한해서 일어남
 * 
 * > 입력 이벤트
 * input: 사용자가 입력을 할 때: shift나 esc같은 부분에선 작동X
 * change: 요소의 값이 변했을 때: 엔터를 누르거나 포커스가 빠져나갈 때 입력이 완료되었다고 판단되며 change, focusout, focusin 순으로 나옴
 * ->단 그 후에 계속 focus만 변경시키는 건 change 작동X (값이 바껴야 함)
 */

 const el = document.querySelector('#form');

 function printEventType(e) {
   console.log('type:', e.type);
   console.log('target:', e.target);
   console.log('---------');
 }
 
 el.addEventListener('focusin', printEventType);
 el.addEventListener('focusout', printEventType);
 el.addEventListener('input', printEventType);
 el.addEventListener('change', printEventType);
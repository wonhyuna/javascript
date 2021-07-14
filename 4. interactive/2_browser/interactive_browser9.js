// 스타일 다루기
const today = document.querySelector('#today');
const tomorrow = document.querySelector('#tomorrow');

// style 프로퍼티: 여러 개 할 때 다 적어야 함, 속성값에 style 프로퍼티 내용이 추가됨
today.children[0].style.textDecoration = 'line-through';
today.children[0].style.backgroundColor = '#DDDDDD';
today.children[2].style.textDecoration = 'line-through';
today.children[2].style.backgroundColor = '#DDDDDD';

// elem.className: class 속성 값 전체가 바뀜(item class가 사라지고 done이 생김)
today.children[1].className = 'done';   //css파일에 있는 done

// elem.classList: add, remove, toggle (class가 바뀌지 않고 그대로 두기 위해)
const item = tomorrow.children[1];
item.classList.add('done');     //class 추가 (여러 개는 '','' 처럼 ,로 구분)
item.classList.remove('done');  //class 삭제 (여러 개는 '','' 처럼 ,로 구분)
item.classList.toggle('done');  //class가 있으면 제거하고 없으면 추가함
//여러 개 파라미터 전달 불가능 => 특별한 기능이 있으므로 (true, false)
item.classList.toggle('done', true);    //add의 기능
item.classList.toggle('done', false);   //remove의 기능

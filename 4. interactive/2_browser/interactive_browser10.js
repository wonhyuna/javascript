//비표준 속성 활용하기

//1. 선택자로 활용
const fields = document.querySelectorAll('[field]');
console.log(fields);    //3가지 b 출력

//2. 값을 표시할 태그를 구분할 때 활용
const task = {
  title: '코드 에디터 개발',
  manager: 'CastleRing, Raccoon Lee',
  status: '',
};

for (let tag of fields) {
  const field = tag.getAttribute('field');  //title, manager, status
  tag.textContent = task[field];
}

//3. 스타일이나 데이터 변경에 활용
const btns = document.querySelectorAll('.btn');
for (let btn of btns) {
  const status = btn.getAttribute('status');
  btn.onclick = function () {
    fields[2].textContent = status;   //'상태:' 옆에 button이 생김
    fields[2].setAttribute('status', status);
  };
}
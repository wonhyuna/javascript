//data-로 시작하는 속성은 모두 dataset이라는 프로퍼티에 저장
//data-status라는 속성이 있다면, element.dataset.status라는 프로퍼티에 접근해서 값 가져옴

const fields = document.querySelectorAll('[data-field]');   //data-field로 변경
const task = {
  title: '코드 에디터 개발',
  manager: 'CastleRing, Raccoon Lee',
  status: '',
};

for (let tag of fields) {
  const field = tag.dataset.field;    //field는 dataset에 저장되어 있으므로 붙여줘야 함
  tag.textContent = task[field];
}

const btns = document.querySelectorAll('.btn');
for (let btn of btns) {
  const status = btn.dataset.status;   //status는 dataset에 저장되어 있으므로 붙여줘야 함
  btn.onclick = function () {
    fields[2].textContent = status;
    fields[2].dataset.status = status;  //status는 dataset에 저장되어 있으므로 붙여줘야 함
  };
}
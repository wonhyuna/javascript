//배열의 메소드 (Array's Method);
let members = ['쿤갈레', 'Zerrard66', '우리생각해써', '흙토끼', 'End Miracle'];

//delete
console.log(members);
delete members[4];
console.log(members);

//splice(startIndex, deleteCount, item) -> empty라고 표시되지 않고 지워짐
//전달된 값을 인덱스로 그 인덱스부터 뒤에 까지 다 지움
members.splice(4);
console.log(members);

//1번 인덱스부터 2개 삭제
members.splice(1, 2);
console.log(members);

//1번 인덱스부터 0개 지워지고 그 후에 NiceCodeit과 HiCodeit 추가
members.splice(1, 0, 'NiceCodeit', 'HiCodeit');
console.log(members);

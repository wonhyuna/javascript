//배열 (Array)
let members = ['쿤갈레', 'Zerrard66', '우리생각해써',
'흙토끼', 'End Miracle'];

//배열도 object 타입
console.log(typeof members);

//배열 길이
console.log(members.length);
console.log(members['length']);
console.log(members[members.length - 1]);

//배열 추가
members[5] = "NiceCodeit";
console.log(members[5]);
console.log(members.length);
console.log(members);

//하나 건너서 값을 추가할 때
members[7] = "LALALA";
console.log(members[6]);
console.log(members.length);
console.log(members);

//배열 수정
members[3] = "달토끼";
console.log(members);

//배열 삭제
delete members[4];  //empty가 남아있음
console.log(members);
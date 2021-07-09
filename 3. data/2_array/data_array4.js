//배열의 메소드
let members = ['쿤갈레', 'Zerrard66', '우리생각해써',
'흙토끼', 'End Miracle'];
console.log(members);


//splice(startIndex, deleteCount, item)
// 배열의 첫 요소를 삭제 : shift()
members.splice(0, 1);
members.shift();
console.log(members);

// 배열의 마지막 요소를 삭제 : pop()
members.splice(members.length - 1, 1);
members.pop();
console.log(members);

// 배열의 첫 요소로 값 추가 : unshift('')
members.splice(0, 0, 'NiceCodeit');
members.unshift('NiceCodeit');
console.log(members);

// 배열의 마지막 요소로 값 추가 : push('')
members.splice(members.length, 0, 'HiCodeit');
members.push('HiCodeit');
console.log(members);


//배열에서 특정 값 찾기 : indexOf, lastIndexOf
let brands = ['Google', 'Kakao', 'Naver', 'Kakao'];
console.log(brands.indexOf('Kakao')); //있다면 0번부터 시작했을 때 해당 인덱스
console.log(brands.indexOf('Daum')); //없다면 -1

console.log(brands.lastIndexOf('Kakao')); //있다면 마지막부터 시작했을 때 해당 인덱스
console.log(brands.lastIndexOf('Daum')); //없다면 -1

//배열에서 특정 값이 있는지 확인하기
console.log(brands.includes('Kakao'));  //있다면 true
console.log(brands.includes('Daum'));   //없다면 false

//배열 뒤집기
console.log(brands);
brands.reverse();
console.log(brands);

//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array

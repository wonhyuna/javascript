// HTML 속성 (HTML attribute)
const tomorrow = document.querySelector('#tomorrow');
const item = tomorrow.firstElementChild;
const link = item.firstElementChild;

// id 속성
console.log(tomorrow);
console.log(tomorrow.id);

// class 속성
console.log(item);
console.log(item.className);

// href 속성
console.log(link);    //www.codeit.kr 부분
console.log(link.href);   //developer.mozilla 부분
console.log(tomorrow.href);   //ol에 href사용하는 것은 표준이 아니므로 undefined가 출력됨

// elem.getAttribute('속성'): 속성에 접근하기
console.log(tomorrow.getAttribute('href'));   //www.codeit.kr 부분
console.log(item.getAttribute('class'));      //item

// elem.setAttribute('속성', '값'): 속성 추가(수정)하기
tomorrow.setAttribute('class', 'list'); // 추가 clss = "list" 추가됨
link.setAttribute('href', 'https://www.codeit.kr'); // 수정 -> codeit 페이지 주소로 변경

// elem.removeAttribute('속성'): 속성 제거하기
tomorrow.removeAttribute('href');   //tomorrow 뒤에 붙어 있던 href가 지워짐
tomorrow.removeAttribute('class'); 

//Attribute 관련 메소드로는 =를 이용한 수정이 불가능함

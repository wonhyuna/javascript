//요소 노드 주요 프로퍼티, DOM 프로퍼티
const myTag = document.querySelector('#list-1');

// textContext: 해당 부분의 html을 제외한 텍스트만 가져 옴
console.log(myTag.textContent);
myTag.textContent = '<li>new text!</li>'; //<li>도 다 출력이 됨

// outerHTML: 해당 부분의 전체 html코드, 줄바꿈 들여쓰기 모두 포함
console.log(myTag.outerHTML);
myTag.outerHTML = '<ul id = "new-list"><li>Exotic</li></ul>';

// innerHTML: 내부의 HTML 자체를 수정할 때 주로 사용됨/요소 내부의 HTML 태그들끼리의 줄 바꿈이나, 들여쓰기, 띄어쓰기 모두 포함
console.log(myTag.innerHTML);
myTag.innerHTML = '<li>Exotic</li>'; //+= 하면 마지막 부분에 추가


const today = document.querySelector('#today');

today.innerHTML = '<li>처음</li>' + today.innerHTML;
today.innerHTML = today.innerHTML + '<li>마지막</li>';

today.outerHTML = '<p>이전</p>' + today.outerHTML; 

const newToday = document.querySelector('#today');
newToday.outerHTML = newToday.outerHTML + '<p>다음</p>';

//===========================================================
// 요소 노드 추가하기
const tomorrow = document.querySelector('#tomorrow');

// 1. 요소 노드 만들기: document.createElement('태그이름')
const first = document.createElement('li');

// 2. 요소 노드 꾸미기: textContent, innerHTML, ...
first.textContent = '처음';

// 3. 요소 노드 추가하기: NODE.prepend, append, after, before
tomorrow.prepend(first);  //맨 처음 추가


const last = document.createElement('li');
last.textContent = '마지막';
tomorrow.append(last);    //맨 뒤에 추가

const prev = document.createElement('p');
prev.textContent = '이전';
tomorrow.before(prev);    //해당 되는 부분의 이전에 추가 (또 추가 되면 그 이전에 추가)

const next = document.createElement('p');
next.textContent = '다음';
tomorrow.after(next);     //해당 되는 부분의 이후에 추가

//===========================================================
// 노드 삭제와 이동
const today = document.querySelector('#today');
const tomorrow = document.querySelector('#tomorrow');

// 노드 삭제하기: Node.remove()
today.children[2].remove();
tomorrow.remove();

// 노드 이동하기: prepend, append, before, after
today.append(tomorrow.children[1]);   //마지막 요소에 이동
tomorrow.children[1].after(today.children[1]);    //today 다음으로 tomorrow를 이동
tomorrow.children[2].before(today.children[1]);   //today 이전으로 tomorrow를 이동
tomorrow.lastElementChild.before(today.children[1]);
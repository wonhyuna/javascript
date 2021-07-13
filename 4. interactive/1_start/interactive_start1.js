const myNumberTag = document.getElementById('myNumber');
const decreaseBtn = document.getElementById('decrease');
const increaseBtn = document.getElementById('increase');

let myNumber = +myNumberTag.textContent;

decreaseBtn.onclick = function() {
  myNumber--;
  myNumberTag.textContent = myNumber;
};

increaseBtn.onclick = function() {
  myNumber++;
  myNumberTag.textContent = myNumber;
};

const colorBtns = document.getElementsByClassName('color-btn');

for (let btn of colorBtns) {
  btn.onclick = function() {
    myNumberTag.style.color = btn.dataset.color;
  }
};

//id로 태그 선택하기: getElementById 사용
const myTag1 = document.getElementById('myNumber');
console.log(myTag1);

const myTag2 = document.getElementById('btns');
console.log(myTag2);

const myTag3 = document.getElementById('codeit');
console.log(myTag3);    //없는 ID값이면 null

//class로 태그 선택하기: getElementsByClassName 사용 (여러 개이므로 elements)
const myTags1 = document.getElementsByClassName('color-btn');
console.log(myTags1);   //깊이와 상관없이 위에서부터 차례대로
console.log(myTags1[1]);
console.log(myTags1.length);

for (let tag of myTags1) {
	console.log(tag);
}

const myTags2 = document.getElementsByClassName('red');
console.log(myTags2);
console.log(myTags2[0]);  //요소가 하나면 0번 인덱스에만

const myTags3 = document.getElementsByClassName('white');
console.log(myTags3);   //없는 class name이면 빈 HTMLCollelction 출력 (null이 아님)
console.log(myTags3 === null);  //false
console.log(myTags3.length);

//유사 배열 (Array-Like Object)
//1. 숫자 형태의 indexing 가능 (0부터 시작)
//2. length 프로퍼티 사용 가능 
//3. 배열의 기본 메소드 사용 불가능 (ex. push, splice 등)
//4. Array.isArray(유사배열) 은 false
//for..of문이 사용 가능한 것도 있고 아닌 것도 있음 (이런 식으로 상황에 따라 다른 경우 많음)


//태그 이름으로 태그 선택하기: getElementsByTag 사용
const btns = document.getElementsByTagName('button');
const allTags = document.getElementsByTagName('*'); //모든 태그


// css 선택자로 태그 선택하기: querySelector(css는 #사용)
const myTag4 = document.querySelector('#myNumber');
console.log(myTag4);    //없으면 null 

const myTag5 = document.getElementById('myNumber');
console.log(myTag5);
//------------------------------------------------------
const myTag6 = document.querySelector('.color-btn');
console.log(myTag6);    //여러 개 중 가장 첫 번째 요소만 나옴

const myTags7 = document.querySelectorAll('.color-btn');
console.log(myTags7);   //여러 개 출력됨 (Nodelist 출력) & 없으면 빈 Nodelist

const myTags8 = document.getElementsByClassName('color-btn');
console.log(myTags8);
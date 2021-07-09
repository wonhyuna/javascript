//내장 객체 Standard built-in object
//Date 객체
let myDate = new Date();
console.log(myDate);  //현재 시간

let my_Date = new Date(1000);
console.log(my_Date); //1970년 1월 1일 00:00:00 UTC + 1000밀리초(1초)

//new Date('YYYY-MM-DD')
let myDate1 = new Date('2017-05-18'); //자정
console.log(myDate1);

//new Date('YYYY-MM-DDThh:mm:ss')
let myDate2 = new Date('2017-05-18T19:11:16');
console.log(myDate2);

//new Date(YYYY, MM, DD, hh, mm, ss, ms)
//month는 0부터 시작(1월 -> 0월) 
//연도와 월은 필수 작성, 나머지 생략 가능 (YYYY, MM, 1, 0, 0, 0, 0)
let mydate1 = new Date(2017, 4, 18, 19, 11, 16);  //전부 5월 May
let mydate2 = new Date(2017, 4, 18, 19, 11);
let mydate3 = new Date(2017, 4, 18, 19);
let mydate4 = new Date(2017, 4, 18);
let mydate5 = new Date(2017, 4);

console.log(mydate1);
console.log(mydate2);
console.log(mydate3);
console.log(mydate4);
console.log(mydate5);


//Date.getTime() -> 1970년 1월 1일 00:00:00 UTC부터 몇 밀리초 지났는지 -> 타임스탬프
let mytime = new Date(2017, 4, 18, 19, 11, 16);
let today = new Date();

let timeDiff = today.getTime() - mytime.getTime();

console.log(timeDiff + '밀리초');
console.log(timeDiff / 1000+ '초');
console.log(timeDiff / 1000 / 60 + '분');
console.log(timeDiff / 1000 / 60 / 60 + '시간');

console.log(mytime.getFullYear()); //연도
console.log(mytime.getMonth()); //월 -> 0부터
console.log(mytime.getDate()); //일
console.log(mytime.getDay()); //요일 -> 일 0 ~ 토 6
console.log(mytime.getHours()); //시
console.log(mytime.getMinutes()); //분
console.log(mytime.getSeconds()); //초
console.log(mytime.getMilliseconds()); //밀리초

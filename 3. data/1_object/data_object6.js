let mytime = new Date(2017, 4, 18, 19, 11, 16);
let today = new Date();

//Date 객체 정보 수정하기
mytime.setFullYear(2002);
mytime.setMonth(6);
mytime.setDate(20);
//setHours, setMinutes, setSeconds, setMilliseconds, setTime(milliseconds) -> 기준 날짜부터 밀리초 이후를 나타내는 날짜 설정

//간단하게 시간 정보 알아내기
console.log(today.toLocaleDateString()); // myDate가 가진 날짜에 대한 정보 (년. 월. 일)
console.log(today.toLocaleTimeString()); // myDate가 가진 시간에 대한 정보 (시:분:초)
console.log(today.toLocaleString()); // myDate가 가진 날짜와 시간에 대한 정보 (년. 월. 일 시:분:초)

//자동 날짜 수정 기능
let my = new Date(1988, 0, 32); //1월 32일은 없음
//2월 1일로 자동고침됨
console.log(my) //Mon Feb 01 1988 00:00:00

//현 시점의 날짜 값 Date.now()
console.log(Date.now() === my.getTime()); //true

//Date객체의 형 변환
let mdate = new Date(2017, 4, 18);
console.log(typeof mdate); // object
console.log(String(mdate)); // Thu May 18 2017 00:00:00 GMT+0900 (Korean Standard Time)
console.log(Number(mdate)); // 1495033200000
console.log(Boolean(mdate)); // true

console.log(mdate.getTime() === Number(mdate)); // true -> 밀리초로 측정

//Date객체끼리의 사칙 연산
let myD1 = new Date(2017, 4, 18);
let myD2 = new Date(2017, 4, 19);

let timeDiff = myD2 - myD1;
console.log(timeDiff); // 86400000 (ms)
console.log(timeDiff / 1000); // 86400 (sec)
console.log(timeDiff / 1000 / 60) // 1440 (min)
console.log(timeDiff / 1000 / 60 / 60) // 24 (hour)
console.log(timeDiff / 1000 / 60 / 60 / 24) // 1 (date)

//날짜를 표현하는 문자열 다양함 but YYYY-MM-DDThh:mm:ss 형식 사용 권장
let date1 = new Date('12/15/1999 05:25:30');
let date2 = new Date('December 15, 1999 05:25:30');
let date3 = new Date('Dec 15 1999 05:25:30');

console.log(date1);
console.log(date2);
console.log(date3);
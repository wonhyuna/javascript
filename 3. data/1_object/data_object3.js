//메소드 (Method) -> 연관성 있는 함수 묶는 방법
let greetings = {
  sayHello: function(name) { //함수이름은 property name이 대신해 줌
    console.log(`Hello ${name}!`);
  },
  sayHi: function() {
    console.log('Hi!');
  },
  sayBye: function() {
    console.log('Bye!');  //console이라는 객체의 log라는 메소드로 볼 수 있음
  }
};

greetings.sayHello('Codeit');
greetings['sayHello']('Codeit');


//같은 변수 이름이어도 상황에 따라 다른 값을 도출해야 할 때 메소드 사용
let rectAngle = {
  width: 30,
  height: 50,
  getArea: function(){
    return rectAngle.width * rectAngle.height;
  }
}

let triAngle = {
  width: 15,
  height: 40,
  getArea: function(){
    return triAngle.width * triAngle.height / 2;
  }
}
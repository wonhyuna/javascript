//null과 undefined
//null -> 의도적으로 표현할 때 사용하는 값 (의도적인 없음)
//undefined -> 값이 없다는 것을 확인하는 값 (처음부터 없음)

let codeit;
console.log(codeit); //undefined (값을 정해주지 않음)
codeit = null;
console.log(codeit);  //의도적으로 null을 지정해줌
//의도적으로 값이 없다는 것을 보여주고 싶을 때 undefined 사용X

console.log(null == undefined); //true
console.log(null === undefined);  //false

let cup;
console.log(cup); //undefined
cup = '물';
console.log(cup); //물
cup = null;
console.log(cup); //null
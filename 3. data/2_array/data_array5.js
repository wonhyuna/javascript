//for...of
let influencer = ['suwonlog', 'small.tiger', 'Minam.ludens', 'cu_convenience24'];

for (let i = 0; i < influencer.length; i++){
  console.log(influencer[i]);
}

/*
for (변수 of 배열){
  동작부분;
}
*/

for (let element of influencer){
  console.log(element);
}

//for...in은 객체에 유용하므로 배열에서는 사용 권장X
for (let index in influencer){
  console.log(influencer[index]);
}
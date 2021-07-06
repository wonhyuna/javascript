function teraToGiga(x){
  console.log(x + "TB는");
  x_giga = x * 1024;
  console.log(x_giga + "GB 입니다.");
};

function teraToMega(y){
  console.log(y + "TB는");
  y_mega = y * 1048576;
  console.log(y_mega + "MB 입니다.");
};


// TB -> GB 테스트
teraToGiga(2);
// TB -> MB 테스트
teraToMega(2);
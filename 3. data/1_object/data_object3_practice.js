let myVoca = {
  addVoca: function(english, korean){
    myVoca[english] = korean;
  },
  deleteVoca: function(english){
    delete myVoca[english];
  },
  printVoca: function(english){
    console.log(`"${english}"의 뜻은 "${myVoca[english]}"입니다.`);
  }
};

// addVoca메소드 테스트 코드
myVoca.addVoca('parameter', '매개 변수');
myVoca.addVoca('element', '요소');
myVoca.addVoca('property', '속성');
console.log(myVoca);

// deleteVoca메소드 테스트 코드
myVoca.deleteVoca('parameter');
myVoca.deleteVoca('element');
console.log(myVoca);

// printVoca메소드 테스트 코드
myVoca.printVoca('property');
function isPalindrome(word) {
  let len = word.length;  //7(racecar)  or  6(123 321)
  let i = 0;
  while(i !== Math.floor(len / 2)){
    if (word[i] !== word[len - 1 - i]){
      return false;
    }
    i++;
  }
  return true;
}

// 테스트 코드
console.log(isPalindrome("racecar"));
console.log(isPalindrome("stars"));
console.log(isPalindrome("기러기"));
console.log(isPalindrome("123321"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("kayak"));
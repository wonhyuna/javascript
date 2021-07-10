function calculateChange(payment, cost) {
  let change = payment - cost;
  let oman = Math.floor(change / 50000); 
  let man = Math.floor((change % 50000) / 10000);
  let ocheon = Math.floor(((change % 50000) % 10000) / 5000);
  let cheon = Math.floor((((change % 50000) % 10000) % 5000) / 1000);
  console.log(`50000원 지폐: ${oman}장`);
  console.log(`10000원 지폐: ${man}장`);
  console.log(`5000원 지폐: ${ocheon}장`);
  console.log(`1000원 지폐: ${cheon}장`);
}

// 테스트 코드
calculateChange(100000, 33000); //67000
console.log('');
calculateChange(500000, 378000);  //122000 




function calculateChange(payment, cost) {
  // 코드를 작성해 주세요.
  let change = payment - cost; // 거스름돈 총액

  function billCounting(amount) {
    const count = Math.floor(change / amount);
    change = change % amount;
    return count;
  }

  const fiftyCount = billCounting(50000);
  const tenCount = billCounting(10000);
  const fiveCount = billCounting(5000);
  const oneCount = billCounting(1000);

  console.log(`50000원 지폐: ${fiftyCount}장`);
  console.log(`10000원 지폐: ${tenCount}장`);
  console.log(`5000원 지폐: ${fiveCount}장`);
  console.log(`1000원 지폐: ${oneCount}장`);
}

calculateChange(100000, 33000);
console.log('');
calculateChange(500000, 378000);
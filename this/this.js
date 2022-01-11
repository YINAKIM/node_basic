console.log(this); // {}
console.log(this ===  module.exports);  // true
console.log(this ===  exports);         // true : 최상의 스코프에 존재하는 this는 module.exports 또는 exports객체를 가리킴.

function whatIsThis() {
    console.log('function',this === exports, this === global);
    // 예상 ) function false true (함수실행시 this는 전역객체니까)
    // 결과 ) function false true (함수 내부에서 this는 global)
}
whatIsThis();





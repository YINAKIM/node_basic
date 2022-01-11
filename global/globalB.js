const A = require('./globalA');

global.message = '안녕하세요';
console.log(A()); // globalA에서 가져옴
console.log('require, module.exports는 아무곳에서나 사용할 수 있다.');

module.exports = '나잡아봐라';
require('./var');

console.log('require.cache:');
console.log(require.cache);
console.log('require.main:');
console.log(require.main);
console.log(require.main === module);
console.log(require.main.filename);
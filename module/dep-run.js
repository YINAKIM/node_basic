// 만약 두 모듈이 서로 require 한다면?

const dep1 = require('./dep1');
const dep2 = require('./dep2');

dep1();
dep2();

/*
일단 맨위 1줄이 실행되고, dep2에서는 dep1를 실행하는게 반복된다. => 순환참조 (circular dependency)
dep1의 module.exports가 함수가 아니라 빈객체로 바뀐다.
순환참조가 있을경우, 에러를 발생시키지 않고 조용히 ... 빈객체로 변경된다 => 예기치 못한 동작이 발생할 수 있다.

따라서, 순환참조가 발생하지 않도록 구조를 잡아야한다.
----------------------------------------------------------------------------------------
require dep1: {}
require dep2: [Function (anonymous)]
dep2 [Function (anonymous)]
dep1 {}
(node:6983) Warning: Accessing non-existent property 'Symbol(nodejs.util.inspect.custom)' of module exports inside circular dependency
(Use `node --trace-warnings ...` to show where the warning was created)
(node:6983) Warning: Accessing non-existent property 'constructor' of module exports inside circular dependency
(node:6983) Warning: Accessing non-existent property 'Symbol(Symbol.toStringTag)' of module exports inside circular dependency
(node:6983) Warning: Accessing non-existent property 'Symbol(Symbol.iterator)' of module exports inside circular dependency
(node:6983) Warning: Accessing non-existent property 'Symbol(nodejs.util.inspect.custom)' of module exports inside circular dependency
(node:6983) Warning: Accessing non-existent property 'constructor' of module exports inside circular dependency
(node:6983) Warning: Accessing non-existent property 'Symbol(Symbol.toStringTag)' of module exports inside circular dependency
(node:6983) Warning: Accessing non-existent property 'Symbol(Symbol.iterator)' of module exports inside circular dependency

*/
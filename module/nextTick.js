setImmediate(() => {
    console.log('setImmediate 실행');
});
Promise.resolve().then(() => console.log('promise'));
process.nextTick(() => {
    console.log('process.nextTick');
});
setTimeout(() => {
    console.log('timeout');
}, 0);

/*
넷다 백그라운드 > 태스크큐로 넘어간다
그럼 호출순서대로 실행될것같지만

크게보면 [마이크로태스트 > 태스크큐] 의 순서, 그런데
1. process.nextTick, promise는 마이크로태스크에 들어가고,
   (마이크로태스크 안에서는 nextTick > promise순서)

2. setTimeout, setImmediate은 태스크큐에 들어간다.
   (이 둘은 환경에 따라 달라진다. 때문에 node에서는 setTimeout 0 쓰지말고 setImmediate사용권장)

따라서, 실행결과는
----------------------
process.nextTick 실행
promise
timeout
setImmediate 실행
----------------------
*/
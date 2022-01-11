require가 맨위에 안와도 됨   
module.exports가 맨 아래 안와도 됨

## require.cache
- 한번 require한 파일은 require.cache에 저장된 require를 재사용한다. 
- 새로require하려면 require.cache속성을 제거하면된다.
- but 프로그램 동작이 꼬일 수 있다. 주의.

#### require.cache내용
- module.exports했던부분
- 로딩여부(loaded)
- 부모(parent) / 자식(children) 모듈관계 
---
[Object: null prototype] {   
'/Users/kim-yina/Desktop/yinaLab/2022Lab/code/node/module/require.js': Module {   
id: '.',   
path: '/Users/kim-yina/Desktop/yinaLab/2022Lab/code/node/module',   
exports: '나잡아봐라',   
parent: null,   
filename: '/Users/kim-yina/Desktop/yinaLab/2022Lab/code/node/module/require.js',   
loaded: false,   
children: [ [Module] ],   
paths: [   
'/Users/kim-yina/Desktop/yinaLab/2022Lab/code/node/module/node_modules',   
'/Users/kim-yina/Desktop/yinaLab/2022Lab/code/node/node_modules',   
'/Users/kim-yina/Desktop/yinaLab/2022Lab/code/node_modules',   
'/Users/kim-yina/Desktop/yinaLab/2022Lab/node_modules',   
'/Users/kim-yina/Desktop/yinaLab/node_modules',   
'/Users/kim-yina/Desktop/node_modules',   
'/Users/kim-yina/node_modules',   
'/Users/node_modules',   
'/node_modules'   
]   
},   
'/Users/kim-yina/Desktop/yinaLab/2022Lab/code/node/module/var.js': Module {   
id: '/Users/kim-yina/Desktop/yinaLab/2022Lab/code/node/module/var.js',   
path: '/Users/kim-yina/Desktop/yinaLab/2022Lab/code/node/module',   
exports: { odd: '홀수입니다.', even: '짝수입니다.' },   
parent: Module {   
id: '.',   
path: '/Users/kim-yina/Desktop/yinaLab/2022Lab/code/node/module',   
exports: '나잡아봐라',   
parent: null,   
filename: '/Users/kim-yina/Desktop/yinaLab/2022Lab/code/node/module/require.js',   
loaded: false,   
children: [Array],   
paths: [Array]   
},   
filename: '/Users/kim-yina/Desktop/yinaLab/2022Lab/code/node/module/var.js',   
loaded: true,   
children: [],   
paths: [   
'/Users/kim-yina/Desktop/yinaLab/2022Lab/code/node/module/node_modules',   
'/Users/kim-yina/Desktop/yinaLab/2022Lab/code/node/node_modules',   
'/Users/kim-yina/Desktop/yinaLab/2022Lab/code/node_modules',   
'/Users/kim-yina/Desktop/yinaLab/2022Lab/node_modules',   
'/Users/kim-yina/Desktop/yinaLab/node_modules',   
'/Users/kim-yina/Desktop/node_modules',   
'/Users/kim-yina/node_modules',   
'/Users/node_modules',   
'/node_modules'   
]   
}   
}   


## require.main 는 노드 실행시 첫 모듈을 가리킨다.
#### require.main 내용 
- 현재 node /Users/kim-yina/Desktop/yinaLab/2022Lab/code/node/module/require.js 로실행 => require.js가 main이된다.
---
<ref *1> Module {   
id: '.',   
path: '/Users/kim-yina/Desktop/yinaLab/2022Lab/code/node/module',   
exports: '나잡아봐라',   
parent: null,   
filename: '/Users/kim-yina/Desktop/yinaLab/2022Lab/code/node/module/require.js',   
loaded: false,   
children: [   
Module {      
id: '/Users/kim-yina/Desktop/yinaLab/2022Lab/code/node/module/var.js',   
path: '/Users/kim-yina/Desktop/yinaLab/2022Lab/code/node/module',   
exports: [Object],   
parent: [Circular *1],   
filename: '/Users/kim-yina/Desktop/yinaLab/2022Lab/code/node/module/var.js',   
loaded: true,   
children: [],      
paths: [Array]   
}   
],   
paths: [   
'/Users/kim-yina/Desktop/yinaLab/2022Lab/code/node/module/node_modules',   
'/Users/kim-yina/Desktop/yinaLab/2022Lab/code/node/node_modules',   
'/Users/kim-yina/Desktop/yinaLab/2022Lab/code/node_modules',      
'/Users/kim-yina/Desktop/yinaLab/2022Lab/node_modules',         
'/Users/kim-yina/Desktop/yinaLab/node_modules',   
'/Users/kim-yina/Desktop/node_modules',   
'/Users/kim-yina/node_modules',   
'/Users/node_modules',      
'/node_modules'   
]   
}   

### require.main === module?
- require.cache와 require.main의 형태가 같다.
- 현재파일이 첫 모듈인지 확인 : require.main === module // true 

### require.main.filename
- 첫모듈의 이름 확인 : require.main.filename
/Users/kim-yina/Desktop/yinaLab/2022Lab/code/node/module/require.js   
   

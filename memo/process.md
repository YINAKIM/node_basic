## process객체 
- 현재 실행중인 노드 프로세스에 대한 정보를 담고있다.
- 운영체제나 실행환경별로 다른 동작을 하고싶을 때 사용
> process.version   
'v14.17.3'   
> process.arch   
'x64'   
> process.platform   
'darwin'   
> process.pid   
7181   
> process.uptime()   
49.294275857   
> process.execPath   
'/usr/local/bin/node'   
> process.cwd()   
'/Users/kim-yina/Desktop/yinaLab/2022Lab/code/node'   
> process.cpuUsage()   
{ user: 370222, system: 75976 }   

---
## process.env
- 시스템 환경변수가 출력된다. 
- NODE_OPTIONS : 노드를 실행할 때의 옵션들을 입력 받는다.
- UV_THREADPOOL_SIZE :
> process.env
{
PATH: '/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Applications/VMware Fusion.app/Contents/Public:/Users/kim-yina/Desktop/yinaLab/2022Lab/code/node/node_modules/.bin',
__CFBundleIdentifier: 'com.jetbrains.WebStorm',
SHELL: '/bin/zsh',
TERM: 'xterm-256color',
USER: 'kim-yina',
TMPDIR: '/var/folders/w6/kzrth06535vdqhgsqt8mcdl00000gn/T/',
COMMAND_MODE: 'unix2003',
TERMINAL_EMULATOR: 'JetBrains-JediTerm',
LOGIN_SHELL: '1',
__INTELLIJ_COMMAND_HISTFILE__: '/Users/kim-yina/Library/Caches/JetBrains/WebStorm2021.1/terminal/history/node-history',
SSH_AUTH_SOCK: '/private/tmp/com.apple.launchd.ly987zqWj1/Listeners',
XPC_FLAGS: '0x0',
TERM_SESSION_ID: '2d2c4121-fae1-40ac-a2d4-2d7b288b037b',
__CF_USER_TEXT_ENCODING: '0x1F5:0x3:0x33',
LOGNAME: 'kim-yina',
XPC_SERVICE_NAME: '0',
HOME: '/Users/kim-yina',
SHLVL: '1',
PWD: '/Users/kim-yina/Desktop/yinaLab/2022Lab/code/node',
OLDPWD: '/Users/kim-yina/Desktop/yinaLab/2022Lab/code/node',
ZSH: '/Users/kim-yina/.oh-my-zsh',
PAGER: 'less',
LESS: '-R',
LSCOLORS: 'Gxfxcxdxbxegedabagacad',
LC_CTYPE: 'ko_KR.UTF-8',
_: '/usr/local/bin/node'
}



## process.nextTick(콜백)


## process.exit()


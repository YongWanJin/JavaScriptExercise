
// # Thread : 한번에 한 연산을 처리할 수 있는 가장 작은 단위의 working unit

// # 자바스크립트는 기본적으로 한 thread만 사용한다. 

// # Sync Programming (동기 프로그래밍)
// : 한번에 하나씩 명령을 차례대로 수행하는 프로그래밍

// 예시 :

// 모두 실행하는데에 2초가 걸리는 함수
function longWork(){
    const now = new Date();
    const milliseconds = now.getTime();
    const afterTwoSeconds = milliseconds + 2 * 1000;
    while(new Date().getTime() < afterTwoSeconds){

    }
    console.log('완료');  // 2초 후에 '완료' 출력
}

console.log('Hello');
longWork();  // 2초 소요
console.log('world');

console.log("----------------------------------------");


// 그렇다면 비동기 프로그래밍으로 2초동안 소요되는 동안
// 다른 코드를 동시에 실행할 수 없을까?
// setTimeout 함수를 통해서 실행 가능

function longWork2(){
    // 2초 이후에 해당 작업 실행
    // 그런데 중간에 다른 작업을 얼마든지 처리 가능
    setTimeout(()=>{console.log('완료')}, 2000);  
}

console.log('Hello');
longWork2();  // 2초동안 기다리지 않고도 다음 명령이 실행된다!
console.log('world');


// 자바스크립트는 싱글스레드인데, 비동기 프로그래밍이 어떻게 가능할까?
// 오래 걸릴것 같은 함수가 call stack에 들어오면
// 그 함수는 Event Loop에 의해 task queue(event queue)로 격리된다.
// 그동안 다른 함수들이 call stack에서 실행된다.
// Event Loop는 task queue에 있는 함수를 감시한다.
// task queue에 있는 함수의 처리가 모두 끝나면
// Event Loop가 그 함수를 다시 call stack으로 되돌려 놓는다.


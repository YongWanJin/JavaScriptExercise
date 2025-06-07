

// callback 함수
// : 약속한 시간이 지나고 나서야 실행되는 함수

// callback hell
// : 비동기 프로그래밍을 하기 위해 setTimeout을 여러번 쓰기 위해서
// 다음과 같은 가독성이 매우 떨어지는 코드를 짜야하는 상황

function waitAndRun1() {
    setTimeout(() => {
        console.log('1번 콜백 끝');
        setTimeout(() => {
            console.log('2번 콜백 끝');
            setTimeout(() => {
                console.log('3번 콜백 끝');
            }, 2000);
        }, 2000);
    }, 2000);
}

// waitAndRun1();


// promise()와 then()을 쓰게 되면 보다 높은 가독성으로
// 이와 같은 문제를 해결할 수 있다.

// 해당 시간이 지나고 나서 반환할 값(resolve)이 적힌
// Promise 객체 생성
// (reject에는 에러가 났을 때 반환할 값이다.)
const getPromise = (seconds) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('완료');
        reject('에러');
    }, seconds * 1000);
});

// 시간이 지나고 나서 순차적으로 수행할 명령어와 반환값을
// then이라는 함수를 통해서 연쇄적으로 작성
// (then이 받는 전달인자는 에로우 메소드이고, res는 Promise객체의 reslove 또는 reject임.)
// catch라는 함수를 쓸 수 있는데,
// 이 때에는 getPromise 함수에서 reject 값이 반환되었을 때에 수행할 명령어와 반환값을 작성한다.

getPromise(3)
    .then((res) => {
        console.log('----first then----');
        console.log(res);
        return getPromise(3);

    }).then((res) => {
        console.log('----second then----');
        console.log(res);
        return getPromise(5);

    }).then((res) => {
        console.log('----third then---');
        console.log(res);
    });

console.log('------------------------')


// getPromise를 동시에 실행할 수도 있다.
// (가장 처리시간이 오래 걸리는 것을 기준으로 일괄적으로 결과값이 동시에 출력된다.)
Promise.all([
    getPromise(1),
    getPromise(2),
    getPromise(1)
]).then((res) => {
    console.log(res);  // [ '완료', '완료', '완료' ]
});


// Callback hell
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
    }, seconds * 1000);
});

// 시간이 지나고 나서 순차적으로 수행할 명령어와 반환값을
// then이라는 함수를 통해서 연쇄적으로 작성
// (then이 받는 전달인자는 에로우 메소드임.)
// catch라는 함수는 
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
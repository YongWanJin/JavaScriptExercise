
// async, await 키워드를 통해서
// 비동기 프로그래밍 코드를 좀더 가독성있게 쓸 수 있다.

const getPromise = (seconds) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('완료');
    }, seconds * 1000)
});

async function runner(){
    const result1 = await getPromise(5);
    console.log(result1);
    const result2 = await getPromise(1);
    console.log(result2);
    const result3 = await getPromise(2);
    console.log(result3);
}

// runner();
// console.log('async, await를 쓴 함수보다 이 명령이 먼저 실행된다.')



const getPromise2 = (seconds) => new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('에러');
    }, seconds * 1000)
});

async function runner2(){
    try{
        const result1 = await getPromise2(5);
        console.log(result1);
        const result2 = await getPromise2(1);
        console.log(result2);
        const result3 = await getPromise2(2);
        console.log(result3);
    } catch(e){
        console.log('---catch e ---');
        console.log(e);
    } finally {
        console.log('--- finally ---');
    }
}

runner2();
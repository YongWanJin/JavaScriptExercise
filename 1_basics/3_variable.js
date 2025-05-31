
// 주의사항! 꼭 저장(ctrl+S)을 해야만 코드가 정상적으로 실행된다.


/** 변수 선언하기 */

// 1. var
// 이전에 쓰이던 변수 선언 방식. 최근에는 쓰이지 않는다.

var name = '진용완';
console.log(name);

var age = 30;
console.log(age);


// 2. let

let dog = '장군이';
console.log(dog);

let number = 10;
console.log(number);

// 다음과 같이 변수의 값을 바꿀 수 있다.
age = 20;
console.log(age);

number = 100;
console.log(number);

/** var과 let의 차이 */


// 3. const
// 값이 변경되어서는 안되는 상수를 선언할 때에 쓰인다.

const javascript = 'javascript';
console.log(javascript);


/** 선언과 할당의 차이 */

// 선언
let a;

// 할당
a = 10;

// const는 선언과 할당을 반드시 동시에 해줘야 한다.


/** 변수 이름을 지을 때에 주의할 점들 */

// 1. 알파벳과 숫자를 모두 사용할 수 있으나, 숫자로 변수 이름을 시작할 수 없다.
// 2. 특수기호는 언더스코어(_)와 달러($)만 사용할 수 있다.
// 3. 키워드(let, var 등)는 변수 이름으로 사용할 수 없다.


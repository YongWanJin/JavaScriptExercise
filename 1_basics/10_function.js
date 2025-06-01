
/** 함수 정의와 호출 */

// 파라미터를 한개만 받는 함수

function calculate(number) {
    console.log((number * 10 / 2 % 3).toString());
}

calculate(4);  // 2
calculate(5);  // 1


// 파라미터를 두개 이상 받는 함수

function multiply(x, y){
    console.log(x * y);
}

multiply(2, 3);  // 6
multiply(3, 10); // 30


// 파라미터에 기본값이 지정된 함수

function multiply(x, y = 10){
    console.log(x * y);
}

multiply(4);  // 40

console.log('-----------------------');


/** 반환(return) 받기 */

function multiply(x, y){
    return x * y;
}

const result1 = multiply(2, 3);
console.log(result1);  // 6

const result2 = multiply(2, 10);
console.log(result2);  // 20


console.log('-----------------------');


/** Arrow 함수 */

const multiply2 = (x, y) => {
    return x * y;
}
console.log(multiply2(2, 4));  // 8
console.log(multiply2(3, 5));  // 15


const multiply3 = (x, y) => x*y;
console.log(multiply3(2, 4));  // 8
console.log(multiply3(3, 5));  // 15

const multiply4 = x => x*2;
console.log(multiply4(10));  // 20

console.log('-----------------------');


/** 파라미터를 원하는 만큼 받기 */

function multiplyAll(...arguments){
    return Object.values(arguments).reduce((a, b) => a * b, 1);
}
console.log(multiplyAll(1, 2, 3, 4, 5));

console.log('-----------------------');


/** 즉시 실행 함수 */

(function(x, y){
    console.log(x * y);
})(4, 5)  // 20



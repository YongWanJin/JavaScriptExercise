
let dogs = ['코코', '장군이', '몽자', '보리', '재롱이'];


// push() : 마지막 인덱스에 값 추가 & 실제로 업데이트

dogs.push('담비');
console.log(dogs);  // [ '코코', '장군이', '몽자', '보리', '재롱이', '담비' ]

console.log("-----------------------------");


// pop() : 마지막 인덱스의 값을 반환 후 제거

console.log(dogs.pop());  // 담비
console.log(dogs); // [ '코코', '장군이', '몽자', '보리', '재롱이' ]

console.log("-----------------------------");


// shift() : 첫번째 인덱스의 값을 반환 후 제거

console.log(dogs.shift());  // 코코
console.log(dogs);  // [ '장군이', '몽자', '보리', '재롱이' ]

console.log("-----------------------------");


// unshift() : 첫번째 인덱스에 값을 추가 & 실제로 업데이트

dogs.unshift('빵빵이');  
console.log(dogs);  // [ '빵빵이', '장군이', '몽자', '보리', '재롱이' ]

console.log("-----------------------------");


// splice(x, y) : 특정 구간의 인덱스(x 이상 y 미만)에 속하는 값들을 모두 반환 후 제거

console.log(dogs.splice(0, 3)); // [ '빵빵이', '장군이', '몽자' ]
console.log(dogs);  // [ '보리', '재롱이' ]


console.log("-----------------------------");

dogs = ['코코', '장군이', '몽자', '보리', '재롱이'];


// concat() : 마지막 인덱스에 값 추가 & 업데이트가 반영된 새로운 array를 반환
// (기존 array에는 업데이트가 반영되지 않음)

console.log(dogs.concat('담비')); // [ '코코', '장군이', '몽자', '보리', '재롱이', '담비' ]
console.log(dogs); // [ '코코', '장군이', '몽자', '보리', '재롱이' ]

console.log("-----------------------------");


// slice(x, y) : 특정 구간의 인덱스(x 이상 y 미만)에 속하는 값들을 모두 반환
// (기존 array에는 업데이트가 반영되지 않음)

console.log(dogs.slice(0, 3));  // [ '코코', '장군이', '몽자' ]
console.log(dogs); // [ '코코', '장군이', '몽자', '보리', '재롱이' ]

console.log("-----------------------------");


// spread operator

let dogs2 = [ ... dogs ];
let dogs3 = [dogs];
console.log(dogs2);  // [ '코코', '장군이', '몽자', '보리', '재롱이' ]
console.log(dogs3);  // [ [ '코코', '장군이', '몽자', '보리', '재롱이' ] ]

console.log("-----------------------------");


// join() : 콤마를 기준으로 스트링으로 변환해줌.
// 어떤 문자를 기준으로 나눌지는 전달인자로 정해줄 수 있음

console.log(dogs.join());  // 코코,장군이,몽자,보리,재롱이
console.log(dogs.join('/'));  // 코코/장군이/몽자/보리/재롱이

console.log("-----------------------------");


// sort() : 오름차순 정렬 & 업데이트를 실제로 반영함


// reverse() : 내림차순 정렬


// 사용자 지정 기준으로 정렬하기
// a, b를 비교했을 때
// 1) a를 b보다 나중에 정렬하려면 (뒤에 두려면) 0보다 큰 숫자를 반환
// 2) a를 b보다 먼저 정렬하려면 (앞에 두려면) 0보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0을 반환

let numbers = [1, 9, 5, 7, 2, 6, 3];
numbers.sort((a, b) => {return a > b ? 1 : -1;});
console.log(numbers);  // 오름차순

numbers = [1, 9, 5, 7, 2, 6, 3];
numbers.sort((a, b) => {return a > b ? -1 : 1;});
console.log(numbers);  // 내림차순


console.log("-----------------------------");


// map() : 각 원소를 순회하면서 조건에 맞게 값을 변경함
// (기존 array에는 업데이트가 반영되지 않음)

numbers = [1, 9, 5, 7, 2, 6, 3];
console.log(numbers.map((x) => x * 100));

numbers = [1, 9, 5, 7, 2, 6, 3];
console.log(numbers.map((x) => {
    if (x > 5){
        return x * 10;
    } else {
        return x;
    }
}));

console.log("-----------------------------");


// filter() : 조건에 맞는(true) 값만 따로 추출하여 새로운 array로 반환함

numbers = [1, 9, 5, 7, 2, 6, 3];
console.log(numbers.filter((x) => x % 2 === 0));  // [ 2, 6 ]

console.log("-----------------------------");


// find() : 가장 첫번째로 조건에 맞는 값만 추출하여 반환함

numbers = [1, 9, 5, 7, 2, 6, 3];
console.log(numbers.find((x) => x % 2 === 0));  // 2

console.log("-----------------------------");


// findIndex() : 가장 첫번째로 조건에 맞는 값만 추출하여 그 값의 인덱스를 반환함

numbers = [1, 9, 5, 7, 2, 6, 3];
console.log(numbers.findIndex((x) => x % 2 === 0));  // 4

console.log("-----------------------------");


// reduce(함수, 초기값)

numbers = [1, 9, 5, 7, 2, 6, 3];
console.log(numbers.reduce((p, n)=>p+n, 0));  // numbers 원소들을 모두 더한 값




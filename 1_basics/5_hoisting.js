
/** Hoisting */

// Hoisting : 모든 변수 '선언문'이 맨 처음부터 실행되는것 처럼 코드가 실행되는 것
// 자바스크립트의 특징 중 하나임.

console.log("Hello");
console.log("World");

console.log(name);  // undefined
var name = '진용완';
console.log(name);  // 진용완


// 하지만 키워드 let을 쓰면 Hoisting 현상을 방지할 수 있다.

console.log(dog);  // ReferenceError: Cannot access 'dog' before initialization
let dog = '장군이';
console.log(dog);  // 장군이




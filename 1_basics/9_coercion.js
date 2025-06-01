
/** 명시적 타입 변환 */

// 숫자 -> 문자열

let age = 32;
let stringAge = age.toString();
console.log(typeof stringAge, stringAge);  // string 32


// boolean -> 문자열

let bool = true;
let stringBool = bool.toString();
console.log(typeof stringBool, stringBool);  // string true


// 문자열 -> 숫자

let stringNum = '0';
let num1 = parseInt(stringNum);
console.log(typeof num1, num1);  // number, 0


// 문자열 -> 숫자(실수)

let stringNum2 = '0.88';
let num2 = parseFloat(stringNum2);
console.log(typeof num2, num2);  // number, 0.88


// 문자열 -> boolean
// 문자열이 존재한다 : true
// 문자열이 존재하지 않다 : false

console.log(!'x');  // false
console.log(!!'x');  // true
console.log(!!'');  // false

// 숫자 -> boolean
// 0 : false
// 0 이외의 숫자 : true

console.log(!!0); // false
console.log(!0);  // true

// null : false
// undefined : false
// 어쨌든 값이 존재함 : true

console.log(!!undefined); // false
console.log(!!null); // false


// object -> boolean
// object는 안에 값이 있든 없든 상관없이 무조건 true임.
console.log(!!{});  // true
console.log(!![]);  // true


console.log('--------------------------')


/** 암묵적 타입 변환 */
// 암묵적 타입 변환은 어지간하면 쓰지 말것.

let test = age + '';
console.log(typeof test, test);  // string 32

console.log('98' + 2);  // 982
console.log('98' * 2);  // 196
console.log('98' - 2);  // 96

// 이 변수가 어떤 타입인지를 명확하게 써줘야한다.


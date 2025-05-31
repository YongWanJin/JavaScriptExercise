
/** 자료형에는 6개의 Primitive Type과 1개의 오브젝트 타입이 있다. */

/** Primitive Type */

// 1. Number 숫자

const age = 32;
const tempature = -10;
const pi = 3.14;
const infinity = Infinity;  // 무한대
const nInfinity = -Infinity;

console.log(typeof age);  // number
console.log(typeof tempature);  // number

console.log("==============")


// 2. String 문자열

const name = '진용완';
const dog = "장군이";  // 큰 따옴표 작은 따옴표 모두 가능
console.log(typeof name); // string
console.log(typeof dog); // string

// 이스케이프 문자 : \n, \t, \\, \', \"

// Templete Literal : 이스케이프 문자를 쓰지 않고도 문자 입력을 있는 그대로 가능
const temp = `abc "bcd" 
efg`;
console.log(temp);

// 여러가지 문자열 출력 방식

console.log(name + ' ' + dog);  // 진용완 장군이
console.log(`${name}입니다.`)  // 진용완입니다.

console.log("==============")


// 3. Boolean 

const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);

console.log("==============")


// 4. undefined : 사용자가 직접 값을 초기화하지 않았을 때 '자동으로' 지정되는 값.
// 절대로 쓰지 말 것.

let noInit;
console.log(noInit);
console.log(typeof noInit);

console.log("==============")


// 5. null : '명시적으로' 비어있는 값으로 초기화할 때 쓰는 값.

let init = null;
console.log(init); // null
console.log(typeof init); // 사실은 null타입인데 오래된 버그로 인해 object로 출력됨.

console.log("==============")

// 6. Symbol : 유일무이한 값을 생성할 때 사용함.
// 다른 primitive type과 달리 Symbol 함수를 호출해서사용한다.

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');
// symbol1과 symbol2는 내용은 같지만 서로 다른 유일무이한 값 취급
console.log(symbol1 === symbol2);  // false

console.log("==============")


/** Object Type */

// 1. Map : key와 value의 쌍으로 이루어져있다.
const dictionary = {
    key1: "value1",
    key2: "value2",
    key3: "value3"
};
console.log(dictionary);
console.log(typeof dictionary);  // odject

// 가져오고 싶은 key값의 value를 출력
console.log(dictionary['key2']);  // value2

console.log("==============")


// 2. Array : 값을 리스트로 나열할 수 있다.

const dogs = ['코코', '장군이', '몽자', '재롱이'];
console.log(dogs);

// 가져오고 싶은 인덱스에 있는 값을 출력
console.log(dogs[0]);  // 코코
console.log(dogs[3]);  // 재롱이

// 특정 인덱스에 있는 값을 바꾸기
dogs[0] = '담비';
console.log(dogs[0]);  // 담비

console.log("==============")


// 3. Function : 추후에 설명


/** static typing : 변수를 선언할 때 어떤 타입의 변수를 선언할지 명시하는 코딩 */
// ex) C, Java

/** dynamic typing : 변수의 타입을 명시적으로 선언하지 않고 컴퓨터가 변수의 타입을 '추론'하도록 하는 코딩 */
// ex) JavaScript, Python


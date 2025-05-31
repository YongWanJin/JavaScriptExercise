

/** 산술 연산자 */

console.log(10+10);
console.log(10-10);
console.log(10*10);
console.log(10/10);
console.log(10%4);
console.log(10 * (10 + 10));

console.log("----------------")


/** 증가와 감소 */

// 후위연산자 : 주로 이걸 쓴다
let num = 1;
let result = num++;
console.log(result, num);

// 전위연산자
num = 1;
result = ++num;
console.log(result, num);

console.log("----------------")


/** 자동 형변환 */

let sample = '99';
console.log(+sample);  // 99 문제없이 출력됨
console.log(typeof +sample); // 덧셈 연산자를 사용하는 순간 number로 형변환이 됨
console.log(typeof sample);  // 실제 자료형은 문자열임.

sample = true;
console.log(+sample); // 1 문제없이 출력됨
console.log(typeof +sample); // boolean 역시 덧셈 연산자를 사용하는 순간 number로 형변환이 됨
console.log(typeof sample); // 실제 자료형은 boolean임

sample = "진용완";
console.log(+sample); // NaN(Not a Number)
console.log(typeof +sample);

console.log("----------------")


/** 할당 연산자 */

num = 10;
console.log(num);  // 10

num += 10;
console.log(num);  // 20

console.log("----------------")


/** 비교 연산자 */

// 값만 비교

console.log(5 == 5);  // true
console.log(5 == '5');  // true. 뒤에 있는 문자열 5가 숫자 5로 자동 형변환됨.
console.log(0 == '');  // true
console.log(true == '1');  // true
console.log(5 != '4'); // true

console.log("----------------")

// 값과 타입을 모두 비교
// 실무에서는 무조건 이걸 쓴다

console.log(5 === 5);  // true
console.log(5 === '5'); // false
console.log(0 === '');  // false
console.log(true === '1');  // false
console.log(5 !== '5'); // true

console.log("----------------")


// 대소 관계 비교 연산자

console.log(100>1);
console.log(100<1);
console.log(100<=1);
console.log(100>=1);


console.log("----------------")


// 삼항 조건 연산자

console.log(10 > 0 ? '10이 0보다 크다' : '10이 0보다 작다');

console.log("----------------")


// 논리 연산자

console.log(true&&false);  // false
console.log(true||false);  // true

console.log("----------------")


// 단축 평가 (short circuit evaluation)

// &&를 사용했을 때 좌측이 true면 우측 값 반환
// &&를 사용했을 때 좌측이 false면 좌측 값 반환
// ||를 사용했을 때 좌측이 true면 좌측 값 반환
// ||를 사용했을 때 좌측이 false면 우측 값 반환

console.log(true && '우측 값 반환');
console.log(false && '좌측 값 반환');
console.log(true || '좌측 값 반환');
console.log(false || '우측 값 반환');

console.log("----------------")


// 지수 연산자

console.log( 2**3 );  // 2^3 = 8

console.log("----------------")


// null 연산자

let a;
a = a ?? '좌측값이 null이거나 undefined일때 이 스트링을 저장';
console.log(a);

let b = "asdf";
b = b ?? '좌측 값이 null도 undefined도 아닐 때 좌측 값을 저장';
console.log(b);

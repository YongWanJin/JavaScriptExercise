

/** property attribute */

// 프로퍼티(클래스의 변수)의 종류

// 1) 데이터 프로퍼티 : 키와 값으로 형성된 실질적 값을 갖고 있는 프로퍼티

// 2) 엑세서 프로퍼티 : 자체적으로 값을 갖고 있진 않지만 다른 값을 가져오거나
//                     설정할 때 호출되는 함수로 구성된 프로퍼티
//                     ex) getter, setter


// attribute : 변수의 속성을 변경할 수 있다.


const yujin = {
    name: '안유진',
    year: 2003
};

console.log(Object.getOwnPropertyDescriptor(yujin, 'name'));
// { value: '안유진', writable: true, enumerable: true, configurable: true }

console.log(Object.getOwnPropertyDescriptor(yujin, 'year'));
// { value: 2003, writable: true, enumerable: true, configurable: true }

console.log('----------------------------------');

// value : 실제 프로퍼티의 값
// writable : 값을 수정할 수 있는지 여부. false인 경우 해당 값을 수정 불가능하다.
// enumerable : 열거가 가능한지 여부. for...in 등을 사용할 수 있으면 true
// configurable : 프로퍼티 어트리뷰트의 재정의가 가능한지 여부를 판단한다.
//                false일 경우 프로퍼티 삭제나 어트리뷰트 변경이 금지된다.
//                단, writable이 true인 경우 값 변경과 writable을 변경하는 것은 가능하다.


const yujin2 = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}

console.log(yujin2);
console.log(yujin2.age);

yujin2.age = 30;
console.log(yujin2.age);
console.log(yujin2.year);

console.log(Object.getOwnPropertyDescriptor(yujin2, 'age'));
// { get: [Function: get age], set: [Function: set age],
// enumerable: true, configurable: true }

console.log('----------------------------------');


/** 프로퍼티 직접 설정하기 */

// 기본값은 모두 false이다.


// writable

Object.defineProperty(yujin2, 'height', {
    value: 172,
    writable: false,
    enumerable: true,
    configurable: true
});

console.log(Object.getOwnPropertyDescriptor(yujin2, 'height'));

yujin2.height = 180;
console.log(yujin2);  // writable이 false이기 때문에 height의 값이 180으로 변경되지 않았다.

console.log('----------------------------------');


// enumerable

Object.defineProperty(yujin2, 'name', {
    enumerable: false
});

console.log(Object.keys(yujin2));
for(let key in yujin2){
    console.log(key);
}  // 순회를 할 때에 name이 전혀 포함되지 않는다.
console.log(yujin2.name);  // 그렇다고 해서 name이 사라진 것은 아니다.

console.log('----------------------------------');


// configurable

Object.defineProperty(yujin2, 'height', {
    writable : false,
    configurable: false
});

// 이 경우에는 프로퍼티를 바꾸는 것이 불가능하다. 
// TypeError: Cannot redefine property: height
// Object.defineProperty(yujin2, 'height', {
//     enumerable: false
// });

Object.defineProperty(yujin2, 'height', {
    writable : true,
    configurable: false
});

// 그러나 이 경우에는 값 변경과 writable의 여부를 변경할 수 있다.
// 다만, writable을 false로 바꾼 다음에는 변경할 수 없다.




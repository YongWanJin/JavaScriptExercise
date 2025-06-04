
const testObj = {};

// __proto__ : 모든 객체에 존재하는 proterty이다.
// class 강의에서 배울 때 부모 클래스를 가리킨다.

console.log(testObj.__proto__);  // [Object: null prototype] {}


function IdolModel(name, year){
    this.name = name;
    this.year = year;
}

console.log(IdolModel.prototype);  // {}

console.dir(IdolModel.prototype, {showHidden: true});


// circular reference
console.log(IdolModel.prototype.constructor === IdolModel);  // true
console.log(IdolModel.prototype.constructor.prototype === IdolModel.prototype);  // true


const yujin = new IdolModel('안유진', 2003);

console.log(yujin.__proto__);
console.log(yujin.__proto__ === IdolModel.prototype);  // true


console.log(testObj.__proto__ === Object.prototype);  // true

console.log(IdolModel.__proto__ === Function.prototype);  // true

console.log(Function.prototype.__proto__ === Object.prototype); // true

console.log(IdolModel.prototype.__proto__ == Object.prototype);  // true

console.log(yujin.toString());  // [object Object]
console.log(Object.prototype.toString());  // [object Object]

console.log('--------------------------');


function IdolModel2(name, year){
    this.name = name;
    this.year = year;

    this.sayHello = function(){
        return `${this.name}이 인사를 합니다.`;
    }
}

const yujin2 = new IdolModel2('안유진', 2003);
const wonyoung2 = new IdolModel2('장원영', 2002);

console.log(yujin2.sayHello());
console.log(wonyoung2.sayHello());
// 같은 기능을 하지만 다른 메모리 공간을 차지하고있기 때문에
// 서로 다른 값으로 인식된다.
console.log(yujin2.sayHello === wonyoung2.sayHello); // false

// hasOwnProperty() : 해당 property가 그 객체의 고유한 property인지 확인하는 함수
// true일 경우 고유한 것이 맞고, false일 경우 부모클래스로부터 상속받은 함수임을 알 수 있다.
console.log(yujin2.hasOwnProperty('sayHello'));  // true

console.log('--------------------------');


function IdolModel3(name, year){
    this.name = name;
    this.year = year;
}

IdolModel3.prototype.sayHello = function(){
    return `${this.name}이 인사를 합니다.`;
}

const yujin3 = new IdolModel3('안유진', 2003);
const wonyoung3 = new IdolModel3('장원영', 2004);

// 위와 같이 함수를 선언하게 되면
// 객체들이 하나의 메모리 주소에 있는 함수를 참조함으로써
// 같은 값으로 취급된다.
// 각 객체에 들어있는 함수를 참조하는것이 아니라
// IdolModel3.prototype이라는 부모클래스에 있는 함수를 상속받기 때문.
console.log(yujin3.sayHello === wonyoung3.sayHello);  // true
console.log(yujin3.hasOwnProperty('sayHello'));  // false

// 이때 같은값 여부를 확인할 때에 주의할 점은 함수 뒤에 괄호()를 붙이지 않는 것.
// 괄호를 붙여서 비교하면 함수 그 자체가 아니라 함수가 실행시켜서 리턴한 값을 비교하기 때문에
// 다른 값으로 인식된다.
console.log(yujin3.sayHello() === wonyoung3.sayHello());  // false


console.log('--------------------------');


// 그렇다면 static이 붙은 property는?
// 이렇게 선언하면 된다.

IdolModel3.sayStaticHello = function(){
    return '안녕하세요. 저는 static method입니다.';
}


console.log('--------------------------');


// 그렇다면 오버라이드는 가능한가?

function IdolModel4(name, year){
    this.name = name;
    this.year = year;

    this.sayHello = function(){
        return '안녕하세요. 저는 인스턴스의 메서드입니다.'
    }

}

IdolModel4.prototype.sayHello = function(){
    return '안녕하세요 저는 prototype의 메서드입니다.';
}

const yujin4 = new IdolModel4('안유진', 2003);
console.log(yujin4.sayHello());  // 오버라이딩 가능


console.log('--------------------------');


// 자바스크립트에서는 
// 인스턴스를 생성하고 난 다음에도 prototype을 변경할 수 있다.

function IdolModel5(name, year){
    this.name = name;
    this.year = year;

}

IdolModel5.prototype.sayHello = function(){
    return `${this.name}이 인사를 합니다.`;
}

function FemaleIdolModel5(name, year){
    this.name = name;
    this.year = year;

    this.dance = function(){
        return `${this.name}이 춤을 춥니다.`;
    }
}

// FemaleIdolModel5은 원래 IdolModel5.prototype을 상속받지 않는다.
// 하지만 setPrototypeOf(객체, 프로토타입) 함수를 통해서 변경할 수 있다.
const ray = new FemaleIdolModel5('레이', 2004);

// 이제 객체 ray의 프로토타입은 FemaleIdolModel5.prototype가 아니라
// IdolModel5.prototype가 되었다.
// 객체 ray는 sayHello() 함수를 사용할 수 있게 되었다.
Object.setPrototypeOf(ray, IdolModel5.prototype);
console.log(ray.sayHello());

console.log(ray.constructor === FemaleIdolModel5);  // false
console.log(ray.constructor === IdolModel5); // true
console.log(Object.getPrototypeOf(ray) === FemaleIdolModel5.prototype); // false
console.log(Object.getPrototypeOf(ray) === IdolModel5.prototype); // true


console.log('--------------------------');


// 원본 클래스(생성자 함수)의 prototype 역시 변경할 수 있다.



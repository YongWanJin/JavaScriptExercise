

// 자바스크립트는 lexical scope를 사용하기 때문에
// 함수의 상위 스코프가 정의 시점에 평가된다. 
// 하지만 this 키워드는 바인딩이 객체가 생성되는 시점에 결정된다.

// this 키워드가 가리키는 것
// 1) 일반 함수 호출할 때에는 this가 최상위 객체(global 또는 window)를 가리킨다.
// 2) 메서드로 호출할 땐 호출된 객체를 가리킨다.
// 3) new 키워드를 사용해서 객체를 생성했을 땐 객체를 가리킨다. 

const testFunction = function(){
    return this;
}

console.log(testFunction());  // Object [global] ...
console.log(testFunction() == global);

const yujin = {
    name: '안유진',
    year: 2003,
    sayHello: function(){
        return `안녕하세요 저는 ${this.name}입니다.`;
    }
}

console.log(yujin.sayHello());

function Person(name, year){
    this.name = name;
    this.year = year;

    this.sayHello = function(){
        return `안녕하세요 저는 ${this.name}입니다.`;
    }
}

const yujin2 = new Person('안유진', 2003);
console.log(yujin2.sayHello());

Person.prototype.dance = function(){
    function dance2(){
        return `${this.name}이 춤을 춥니다.`;
    }
    return dance2();
}

console.log(yujin2.dance());

console.log('--------------------------');


/** this 바인딩 하는 방식 */


// call() : 컴마(,)를 기반으로 argument를 순서대로 넘겨준다.
// apply() : argument를 리스트로 넘겨줘야 한다.

function multiply(x, y, z){
    return `${this.name} / 결과값 : ${x*y*z}`;
    // 이 경우에 this는 기본적으로 global에 연결된다.
}

// 하지만 다음과 같은 함수들을 거치면
// this는 yujin2의 객체의 name과 연결된다.
console.log(multiply.call(yujin2, 3, 4, 5));
console.log(multiply.apply(yujin2, [3, 4, 5]));


// bind() : this가 어디에 연결되는지 지정만 해놓고 실행은 나중에 할 수 있다.

const laterFunction = multiply.bind(yujin2, 3, 4, 5);
console.log(laterFunction);
console.log(laterFunction());


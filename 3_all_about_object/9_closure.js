

/** Closure */

// closure : 상위 함수보다 하위 함수가 더 오래 살아있는 경우


function getNumber(){
    var number = 5;

    function innerGetNumber(){
        return number;
    }

    return innerGetNumber;
}

const runner = getNumber();
// getNumber()는 실행이 끝났지만
// 하위 함수인 innerGetNumber()는 runner에 할당되어 여전히 살아남아있다.


// 이 기능을 언제 쓰는가?

// 1) 데이터 캐싱 : 오래걸리는 계산을 한번만 수행하고 기억함

function cacheFunction(){
    // 만약 이 계산이 매우 오래 걸리는 것이라고 가정했을때...
    var number = 10*10;

    function innerCacheFunction(newNumber){
        return number * newNumber;
    }

    return innerCacheFunction;
}

const runner2 = cacheFunction(); // 오래 걸리는 계산을 여기에서 딱 한번만 수행함.
console.log(runner2(10));
console.log(runner2(20));


// 2) 데이터 캐싱 : 계속 변화하는 값을 외부에서 접근하지 못하게 하면서도 기억함.

function cacheFunction2(){
    var number = 99;

    function increment(){
        number ++;
        return number;
    }

    return increment;
}

const runner3 = cacheFunction2();
// 변수 number에는 외부에서 접근할 수 없지만
// runner3 내부에서 number의 변화를 기억하고 있음.
console.log(runner3());  // 100
console.log(runner3());  // 101
console.log(runner3());  // 102
console.log(runner3());  // 103
console.log(runner3());  // 104


// 3) 정보 은닉 : private 접근제어자가 없었을 때 사용하던 방식

function Idol(name, year){
    this.name = name;
    var _year = year;  // this 키워드가 아니기 때문에 외부에서 접근 불가능하다.

    this.sayNameAndYear = function(){
        return `안녕하세요. 저는 ${this.name}입니다. ${_year}에 태어났습니다.`;
    }
}

const yujin = new Idol('안유진', 2003);
console.log(yujin.sayNameAndYear());

console.log(yujin.name);  // 안유진
console.log(yujin._year);  // undefined. 접근 불가능
 


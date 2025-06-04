

/** Closure */

// closure : 상위 함수보다 하위 함수가 더 오래 살아있는 경우

// function getNumber(){
//     var number = 5;

//     function innerGetNumber(){
//         return number;
//     }

//     return innerGetNumber();
// }

// console.log(getNumber());  // 5

console.log('---------------------------');


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

// 1) 데이터 캐싱

function cacheFunction(newNumber){
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


// 2) ??

function cacheFunction2(){
    var number = 99;

    function increment(){
        number ++;
        return number;
    }

    return increment;
}

const runner3 = cacheFunction2();
console.log(runner3());
console.log(runner3());
console.log(runner3());
console.log(runner3());
console.log(runner3());


// 3) 정보 은닉??

function Idol(name, year){
    this.name = name;
    var _year = year;

    this.sayNameAndYear = function(){
        return `안녕하세요. 저는 ${this.name}입니다. ${_year}에 태어났습니다.`;
    }
}

const yujin = new Idol('안유진', 2003);
console.log(yujin.sayNameAndYear());

console.log(yujin.name);  // 안유진
console.log(yujin._year);  // undefined. 접근 불가능
 


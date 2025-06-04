

// 모든 선언은 가장 가까운 scope에 있는 것부터 참조한다.

var numberOne = 20;

function levelOne() {
    var numberOne = 40;

    function levelTwo(){
        var numberTwo = 99;

        console.log(`levelTwo numberTwo : ${numberTwo}`);  // 99
        console.log(`levelTwo numberOne : ${numberOne}`);  // 40
    }

    levelTwo();
    console.log(`levelOne numberOne : ${numberOne}`);  // 40

}

levelOne();
console.log(numberOne);  // 20

// console.log(numberTwo);   // 하위 스코프에 있는 것에는 접근할 수 없다.


console.log('---------------------------');


/** lexical scope */
// 선언된 위치가 상위 스코프를 정한다.
// 자바스크립트는 이걸 취한다.

// cf) Dynamic scope : 실행한 위치가 상위 스코프를 정한다.
// 이걸 취하는 언어에서 functionTwo()를 실행하면 100이 출력된다.

var numberThree = 3;

function functionOne(){
    var numberThree = 100;

    functionTwo();  // 실행 위치
}

function functionTwo(){  // 선언 위치
    console.log(numberThree);  // 3
}

functionOne();

console.log('---------------------------');


// var 키워드는 for, while문 내부의 block scope에 영향을 받는다.
// 하지만 let과 const는 그렇지 않다.
// let과 const 키워드는 함수 레벨 스코프와 블록 레벨 스코프를 만들어낸다.


var i = 999;

for(var i = 0; i < 10; i++){
    console.log(i);
}
console.log(`i in global scope : ${i}`);  // 10

console.log('---------------------------');


i = 999;
for(let i = 0; i < 10; i++){
    console.log(i);
}
console.log(`i in global scope : ${i}`);  // 999
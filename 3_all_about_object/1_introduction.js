

/** 객체를 선언할 때 사용할 수 있는 방법들 */


// 1) object를 생성해서 객체 생성 - {}

const yujin = {
    name: '안유진',
    year: 2003
}

console.log(yujin);


// 2) class를 인스턴스화해서 생성

class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}

console.log(new IdolModel('안유진', 2003));


// 3) function(생성자 함수)을 사용해서 객체 생성
// 오래된 버전의 자바스크립트에서 사용했던 방식이다.

function IdolGenerate(name, year){
    this.name = name;
    this.year = year;
}

const gaeul = new IdolGenerate('가을', 2002);
console.log(gaeul);



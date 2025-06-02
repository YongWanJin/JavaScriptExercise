
/** 클래스 */

// 클래스란?
// 객체(인스턴스)를 생성하기 위해 객체의 변수와 함수를 한 데 모아 정의한 틀.

class IdolModel{

    // 변수
    name;
    year;

    // 생성자
    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    // 함수
    sayMyName(){
        return `안녕하세요. 저는 ${this.name}입니다.`;
    }
}

const yujin = new IdolModel('안유진', 2003);
console.log(yujin);

const gaeul = new IdolModel('가을', 2002);
console.log(gaeul);

const wonyoung = new IdolModel('장원영', 2004);
console.log(wonyoung)

console.log(wonyoung.name);
console.log(wonyoung.year);
console.log(wonyoung.sayMyName());
console.log(typeof IdolModel);  // function. 자바스크립트에서 클래스는 함수로 인식된다.
console.log(typeof wonyoung);  // object. 클래스로 찍어낸 객체는 모두 object이다.



// 자바스크립트에서는 생성자에서만 속성을 정의해도 정상적으로 객체를 생성할 수 있다.
// 하지만 이런 방식으로는 쓰지 말 것.

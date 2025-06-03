

class IdolModel{

    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    sayHello(){
        return `안녕하세요. ${this.name}입니다.`;
    }
}

class FemaleIdolModel extends IdolModel{
    
    weight;

    constructor(name, year, weight){
        super(name, year);  // 부모 클래스의 생성자를 그대로 실행
        this.weight = weight;
    }

    // 오버라이드(함수 재정의)
    // 주의 : 자바스크립트의 경우에는 특수하게
    // 부모 클래스의 변수를 불러올때에도 역시 this 키워드를 써야한다.
    sayHello(){
        return `안녕하세요. ${this.name}입니다. 제 몸무게는 ${this.weight}kg 입니다.`;
    }
}

class MaleIdolModel extends IdolModel{
    
    isDischarged;  // 전역 여부

    constructor(name, year, isDischarged){
        super(name, year);  // 부모 클래스의 생성자를 그대로 실행
        this.isDischarged = isDischarged;
    }

    // 이와 같은 방식으로도 오버라이드를 할 수 있다.
    sayHello(){
        return `${super.sayHello()} 저의 전역 여부는 다음과 같습니다. : ${this.isDischarged}`;
    }
}


const yujin = new FemaleIdolModel('안유진', 2003, 45);
console.log(yujin);
console.log(yujin.sayHello());  // 자식클래스에서는 부모클래스의 모든 함수를 사용할 수 있다.

const jimin = new MaleIdolModel('지민', 1995, true);
console.log(jimin);
console.log(jimin.sayHello());


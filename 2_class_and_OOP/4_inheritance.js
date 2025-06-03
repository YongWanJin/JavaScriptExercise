
// 상속 : 기존에 있는 클래스(부모클래스)로부터
// 변수와 함수를 그대로 이어받아서 클래스를 만드는 것.
// 상속 받아서 만들어진 클래스를 자식클래스라고 한다. 

// 부모 클래스
class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}

// 자식 클래스
class FemaleIdolModel extends IdolModel {
    dance(){
        return `${this.name}이 춤을 훕니다.`;
    }
}

// 자식 클래스
class MaleIdolModel extends IdolModel {
    sing(){
        return `${this.name}이 노래를 합니다.`;
    }
}

const yujin = new FemaleIdolModel('안유진', 2003);
console.log(yujin);
console.log(yujin.dance());

const jimin = new MaleIdolModel('지민', 1995);
console.log(jimin);
console.log(jimin.sing());

console.log(jimin instanceof IdolModel);  // true
console.log(yujin instanceof IdolModel);  // true



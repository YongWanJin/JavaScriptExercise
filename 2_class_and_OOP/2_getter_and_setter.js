

class IdolModel{

    // 접근제어자를 private으로 정할때에는
    // 변수 앞에 #을 붙이면 된다.
    // (ES7 이상의 버전에서만 사용 가능)
    #name;
    #year;

    constructor(name, year){
        this.#name = name;
        this.#year = year;
    }

    // getter
    // 용도1 : 변수들을 가공해서 리턴할 때 사용
    // 용도2 : 접근제어자가 private한 변수들을 반환할때 사용
    // 자바스크립트에서는 setter함수의 이름을 바꾸고자하는 변수의 이름과 똑같이 정히곤 한다.

    get name(){
        return this.#name;
    }

    get nameAndYear() {
        return `${this.#name}-${this.#year}`;
    }

    // setter
    // 용도 : 접근제어자가 private한 변수를 바꿀 때 사용
    // 자바스크립트에서는 setter함수의 이름을 바꾸고자하는 변수의 이름과 똑같이 정히곤 한다.
    set name(name){
        this.#name = name;
    }

}

const yujin = new IdolModel('안유진', 2003);
// getter를 사용할 때에는 변수 선언하듯이 쓸 것. 괄호 쓰지 말 것.
console.log(yujin.nameAndYear);  

// setter를 사용할 때는 다음과 같이 할 것.
yujin.name = '장원영';
console.log(yujin.nameAndYear);

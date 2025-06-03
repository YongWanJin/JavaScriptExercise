
// static : 객체가 아니라 클래스 자체에 귀속되는 것들

class IdolModel{
    name;
    year;
    static groupName = '아이브';

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    static returnGroupName(){
        return '아이브입니다.';
    }
}

const yujin = new IdolModel('안유진', 2003);
console.log(yujin);

console.log(IdolModel.groupName);
console.log(IdolModel.returnGroupName);

console.log("-------------------------------");


/** factory constructor */
// builder 패턴과 비슷? 생성자에 어떤 파라미터를 집어넣는지 명시적으로 알 수 있음.

class IdolModel2{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    static fromObject(object){
        return new IdolModel2(
            object.name,
            object.year,
        );
    }

    static fromList(list){
        return new IdolModel2(
            list[0],
            list[1]
        )
    }
}

const yujin2 = IdolModel2.fromObject({
    name: '안유진',
    year: 2003
});

console.log(yujin2);

const wonyoung2 = IdolModel2.fromList([
    '장원영', 2004
])
console.log(wonyoung2);


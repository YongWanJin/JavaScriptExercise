

function IdolModel(name, year){

    // 객체를 생성했을 때 new 키워드를 쓰지 않았을 때 대비하는 코드
    if(!new.target){
        return new IdolModel(name, year);
    }

    this.name = name;
    this.year = year;

    this.dance = function(){
        return `${this.name}이 춤을 춥니다.`;
    }
}

const yujin = new IdolModel('안유진', 2003); 
console.log(yujin);

const yujin2 = IdolModel('안유진', 2003);
console.log(yujin2);


// arrow 함수로 생성자 함수를 만들 수 있을까? 불가능.

// const IdolModelArrow = (name, year)=>{
//     this.name = name;
//     this.year = year;
// };




// extensible : 확장이 가능한지 여부를 설정할 수 있다.
// 즉, 새로운 변수나 함수를 객체에 추가할 수 있다.

const yujin = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}

console.log(Object.isExtensible(yujin));  // true. 기본값

yujin['position'] = 'vocal';

console.log(yujin);

Object.preventExtensions(yujin);
console.log(Object.isExtensible(yujin));  // extensible을 false로 바꿈.

yujin['height'] = 172;
console.log(yujin);  // 에러가 발생하진 않지만 새로운 변수가 추가되지 않는다.

delete yujin['position'];
console.log(yujin);  // 하지만 삭제는 가능하다.

console.log('------------------------------');


// seal : 확장 및 축소 불가능. 동시에 configurable이 false로 지정됨.

const yujin2 = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}

console.log(Object.isSealed(yujin2));  // 기본값은 false

Object.seal(yujin2);
console.log(Object.isSealed(yujin2)); // true로 변경

yujin2['height'] = 172;
console.log(yujin2);  // 추가 불가능
delete yujin2['name'];
console.log(yujin2);  // 삭제 불가능

// 하지만 기존에 존재하는 값과 property

console.log('------------------------------');


// freezed : 읽기 외에 모든 기능이 불가능하다. 가장 높은 수준의 immutable object
// 추가, 수정, 삭제 모두 불가능. property attribute 또한 변경 불가능
// writable, configureable이 false로 되어있다.
// 다만, 하위 오브젝트까지 그 영향이 가는건 아니다. 

const yujin3 = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}

console.log(Object.isFrozen(yujin3));  // 기분값은 false

Object.freeze(yujin3);
console.log(Object.isFrozen(yujin3));  // true




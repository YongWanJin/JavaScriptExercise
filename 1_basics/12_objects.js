

// Map 객체의 value에는 함수를 할당할 수도 있다.

let yuJin = {
    name: '안유진',
    group: '아이브',
    dance: function(){
        return `${this.name}이 춤을 춥니다.`;
    }
};

console.log(yuJin);
console.log(yuJin.name);
const key = 'name';
console.log(yuJin[key]);

console.log(yuJin.dance());

console.log('-------------------------');


// 변수들을 통해서 Map 오브젝트를 초기화하는 방법은 다음과 같다.

const nameKey = 'name';
const nameValue = '안유진';
const groupKey = 'group';
const groupValue = '아이브';

const yuJin2 = {
    [nameKey]: nameValue,
    [groupKey]: groupValue,
    dance: function(){
        return `${this.name}이 춤을 춥니다.`;
    }
}


// 특정 key의 value 바꾸기

yuJin2['group'] = '뉴진스';
console.log(yuJin2);

console.log('-------------------------');


// 새로운 key와 value를 추가하기

yuJin2['englishName'] = 'An Yu Jin';
console.log(yuJin2);

console.log('-------------------------');


// key와 value를 삭제하기

delete yuJin2['englishName'];
console.log(yuJin2);

console.log('-------------------------');


// 모든 키 값 가져오기

console.log(Object.keys(yuJin2));

console.log('-------------------------');


// 모든 value 값 가져오기

console.log(Object.values(yuJin2));

console.log('-------------------------');


// 좀더 빠르게 map 객체를 초기화하기

const name = '안유진';
const group = '아이브';

const yuJin3 = {
    name,
    group
};
console.log(yuJin3);




// Object와 키워드 const의 관계
// const로 object 객체를 선언할 경우, 객체 그 자체는 변경할 수 없다.
// 하지만 객체 내부의 값들은 변경 가능하다.

// yujin2 = {};  // 불가능하다.






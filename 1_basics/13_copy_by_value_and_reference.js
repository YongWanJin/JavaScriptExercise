

// copy by value : 값에 의한 전달
// copy by reference : 참조에 의한 전달

// 기본적으로 모든 primitive 값은 copy by value다.
// 객체는 copy by reference다.


// copy by value

let original = '안녕하세요';
let clone = original;

console.log(original);
console.log(clone);

console.log('----------------------');

clone += " 진용완 입니다.";
console.log(original);    // 안녕하세요
console.log(clone);  // 안녕하세요 진용완 입니다.

console.log('----------------------');



// copy by reference

let yujin = {
    name: '안유진',
    group: '아이브'
};
let cloneObj = yujin;
console.log(yujin);
console.log(cloneObj);

console.log('----------------------');

cloneObj['group'] = '뉴진스';
console.log(yujin);  // { name: '안유진', group: '뉴진스' }
console.log(cloneObj);  // { name: '안유진', group: '뉴진스' }
// 복사본만 변경했는데 원본까지 모두 변경되었다.
// 왜냐하면 yujin이 할당된 메모리와 cloneObj이 할당된 메모리에 들어있는 내용은 모두
// { name: '안유진', group: '아이브' }라는 값이 저장된 메모리의 '주소'이다.
// 이처럼 주소를 가리키는 것을 '참조'라고 한다.

console.log(yujin === cloneObj);  // true
// 같은 메모리 주소를 참조하고 있기 때문에 같은 값으로 취급된다.

let yujin2 = {
    name: '안유진',
    group: '아이브'
};
console.log(yujin === yujin2);  // false
// 내용은 완전히 같지만 yujin과 yujin2의 메모리에 저장된 주소가 다르기 때문에
// 다른 값으로 취급된다.
// 즉, yujin이 참조하는 메모리 주소와 yujin2가 참조하는 메모리 주소가 다르다는 뜻.

console.log('----------------------');


// spread operator로 복사한 object 객체는 반드시 copy by value이다.
let yujin3 = {
    ...yujin2
};
console.log(yujin2 === yujin3); // false

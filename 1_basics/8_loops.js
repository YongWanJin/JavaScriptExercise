

/** for 문 */

for(let i = 0; i < 10; i++){
    console.log(i);
}

console.log('-----------------');

for(let i = 10; i > 0; i--){
    console.log(i);
}

console.log('-----------------');

for(let i = 0; i < 3; i++){
    for(let j = 3; j > 0; j--){
        console.log(i, j);
    }
}

console.log('-----------------');


// *을 이용해서 6x6의 정사각형을 출력하기
let star= '';
let size = 6;
for(let i = 0; i < size; i++){
    for(let j = 0; j < size; j++){
        star += '*';
    }
    star += '\n';
}
console.log(star);

console.log('-----------------');


/** for ... in 문 */

const dictionary = {
    key1: "val1",
    key2: "val2",
    key3: "val3"
}

for(let key in dictionary){
    console.log(key);
}
for(let key in dictionary){
    console.log(dictionary[key]);
}

console.log('-----------------');

const dogs = ['코코', '장군이', '몽자', '재롱이', '보리'];
for(let index in dogs){
    console.log(index);
}
for(let index in dogs){
    console.log(dogs[index]);
}

console.log('-----------------');


/** for ... of 문 */
// Array 객체에서만 사용 가능하다.

for(let value of dogs){
    console.log(value);
}


console.log('-----------------');


/** while 문 */

let number = 0;

while(number < 10){
    number++;
    console.log(number);
}

console.log('-----------------');


/** continue */

for(let i = 0; i < 10; i++){
    if(i === 5){
        continue;
    }
    console.log(i);
}




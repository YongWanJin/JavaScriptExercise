

/** if문 */

let number = 10;

if (number % 2 === 0) {
    console.log(`${number}는 짝수입니다.`);
} else {
    console.log(`${number}는 홀수입니다.`);
}

console.log("----------------")

if(number % 2 === 0) {
    console.log(`${number}는 2의 배수입니다.`);
} else if(number % 3 === 0) {
    console.log(`${number}는 3의 배수입니다.`);
} else if(number % 5 === 0) {
    console.log(`${number}는 5의 배수입니다.`);
} else {
    console.log(`${number}는 2, 3, 5의 배수가 아닙니다.`);
}

console.log("----------------")


/** switch 문 */

const englishDay = 'monday';

let koreanDay;

switch(englishDay){
    case 'monday':
        koreanDay = '월요일';
        break;
    case 'tuesday':
        koreanDay = '화요일';
        break;
    case 'wendsday':
        koreanDay = '수요일';
        break;
    case 'thursday':
        koreanDay = '목요일';
        break;
    case 'friday':
        koreanDay = '금요일';
        break;
    dafault:
        koreanDay = '주말';
        break;
}
console.log(koreanDay);


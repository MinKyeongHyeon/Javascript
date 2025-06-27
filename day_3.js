const heights = [150, 169, 185, 170];
const ghost = 167;
//heights에서 ghost보다 키가 큰사람이 몇 명인지 출력하시오.

const bigger = heights.filter(tall => tall => ghost).length;
console.log(`${ghost}보다 큰 사람은 ${bigger}명 입니다.`);

const words = ['hello', 'ghost', 'apple', 'grape', 'Lemon'];
// words 중에서 단어에 l 자가 들어있는 단어만 배열로 저장하시오. 조건, 대소문자 상관없이 모두 찾아야함

const findL = words.filter(word => word.toUpperCase().includes('L'));
console.log(findL);

//1. 소수점 이하 반올림(Math.round)
//아래 변수의 소수점 이하를 반올림하는 코드를 작성하시오.
let num = 3.7;
console.log(Math.round(num)); //4

// 2. 소수점 이하 내림(Math.floor)
// 아래 변수의 소수점 이하를 내림하는 코드를 작성하시오.
num = 3.7;
console.log(Math.floor(num)); //3

// 3. 소수점 이하 올림(Math.ceil)
// 아래 변수의 소수점 이하를 올림하는 코드를 작성하시오.
num = 3.1;
console.log(Math.ceil(num)); //4

//4. 소수점 자리수 제한(toFixed)
// 아래 변수의 소수점 둘째자리까지 표시하는 코드를 작성하시오.
num = 3.14159;
console.log(num.toFixed(2)); //3.14

//5. 문자열을 정수로 변환(parseInt)
// 아래 문자열을 정수로 변환하는 코드를 작성하시오.
let str = '42px';
console.log(parseInt(str)); //42

//6. 문자열을 실수로 변환(parseFloat)
// 아래 문자열을 실수로 변환하는 코드를 작성하시오.
str = '3.14m';
console.log(parseFloat(str)); //3.14

// /7. 최대값/최소값 구하기(Math.max/Math.min)
// 아래 숫자들 중 최대값과 최소값을 구하는 코드를 작성하시오.
const arr = [1, 7, 3];
console.log(Math.max(...arr)); //7

//8. 난수(0 이상 1 미만) 생성(Math.random)
// 0 이상 1 미만의 난수를 생성하는 코드를 작성하시오.
console.log(Math.random() * 1); // 0.3713409799555536

//9. 절댓값 구하기(Math.abs)
// 아래 변수의 절댓값을 구하는 코드를 작성하시오.
num = -10;
console.log(Math.abs(num)); //10

//10. 거듭제곱 구하기(Math.pow)
// 2의 3제곱을 구하는 코드를 작성하시오.
console.log(Math.pow(2, 3)); //8

//11. 제곱근 구하기(Math.sqrt)
// 16의 제곱근을 구하는 코드를 작성하시오.
console.log(Math.sqrt(16)); //4

//12. 숫자인지 확인(isNaN, Number.isNaN)
// 아래 값이 숫자인지 확인하는 코드를 작성하시오.

console.log(isNaN('abc')); //true
console.log(Number.isNaN('abc')); //false

//13. 유한수/정수 판별(isFinite, Number.isInteger)
// 아래 값이 유한수인지, 정수인지 확인하는 코드를 작성하시오.
// 10, 3.14에 대해 각각 확인
console.log(isFinite(10), isFinite(3.14)); //true true
console.log(Number.isInteger(10), Number.isInteger(3.14)); //true false

//14. 숫자를 문자열로 변환(toString)
// 아래 숫자를 16진수 문자열로 변환하는 코드를 작성하시오.
num = 255;
console.log(num.toString(16)); //ff

//15. 부호 판별(Math.sign)
// 아래 값의 부호를 판별하는 코드를 작성하시오.
// -5, 0, 7에 대해 각각 판별
console.log(Math.sign(-5), Math.sign(0), Math.sign(5)); // -1, 0, 1

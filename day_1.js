//quiz 1

let name = '제이슨';
const age = 40;
console.log(`${name}은 ${age}살 입니다.`);

//quiz 2
//let으로 age를 25로 선언했다가 30으로 재할당하기

let age2 = 25;
console.log(age2);
age2 = 30;
console.log(age2);

//quiz 6
const user = { name: 'Bob' };
user.name = 'Tom'; // 수정
console.log(user);
user.age = 1000; // 추가
console.log(user);

//quiz 7
const name3 = '시리';
const age3 = '26';
console.log(`안녕하셔유, 저는 ${name3}이구유~, ${age3}살 이여유~`);

//quiz 8
let a = 1,
  b = 2,
  c = 3;
const d = 4,
  e = 5,
  f = 6;
console.log(a, b, c);
console.log(d, e, f);
// 한 줄에 여러번 선언 가능.

//quiz 10
const fruits = ['apple', 'banana'];

fruits[0] = 'Orange';
console.log(fruits);

//quiz 11
const myName = '민경현';
console.log(`안녕하세요, ${myName}님!`);

//quiz 12
const num1 = 3;
const num2 = 5;
const sum = num1 + num2;
console.log(`${num1} + ${num2} = ${sum}`);

function sum2(a, b) {
  result = Number(a + b);
  console.log(`${a} + ${b} = ${result}`);
}
sum2(10, 20);

//quiz 13
function sum3(a, b) {
  let a = Number(a);
  let b = Number(b);
  res1 = a * b;
  res2 = a / b;
  res3 = a + b;
  console.log(`${a} + ${b} = ${res3}`);
  console.log(`${a} * ${b} = ${res1}`);
  console.log(`${a} / ${b} = ${res2}`);
}
sum3(10, 20);

const a1 = 20;
const b1 = 50;
const sum3 = a1 + b1;
const multi = a1 * b1;
const divide = a1 / b1;
console.log(`${a1} + ${b1} = ${sum3}`);
console.log(`${a1} * ${b1} = ${multi}`);
console.log(`${a1} / ${b1} = ${divide}`);

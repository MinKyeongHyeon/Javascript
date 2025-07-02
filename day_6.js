//Object 관련 퀴즈 20개 풀어오기~

//Object 기초 퀴즈

// 1. 객체 person에서 name 속성의 값을 출력하세요.
const person = { name: 'Ghost', age: 20 };
console.log(person.name);

// 2. 객체 person에 height:180 속성을 추가하세요.
person.height = 180;
console.log(person);

// 3. 객체 person에서 age 속성을 삭제하세요.
delete person.age;
console.log(person);

// 4. 객체 person의 모든 속성 (key) 이름을 배열로 출력하세요.
console.log(Object.keys(person));

// 5. 객체 person의 모든 값(value)만 배열로 출력하세요.
console.log(Object.values(person));

// 6. for...in문으로 person의 모든 key와 value를 한 줄씩 출력하세요.
for (let key in person) {
  console.log(key, person[key]);
}

// 7.person에 'age' 속성이 있는지 true/false로 출력하세요.
console.log('age' in person);

// 8.person 객체의 모든 값을 "이름:값" 형태의 문자열로 출력하세요.
Object.entries(person).forEach(x => console.log(x.join(':')));

// 9. 빈 객체 obj를 만들고, 동적으로 key와 value를 추가하세요.
const obj = {};
Object.assign(obj, { name: 'zeezee' });
console.log(obj);

//10. 객체 person의 key 개수를 출력하세요.
console.log(`key개수는 ${Object.keys(person).length}개 입니다.`);

// Object 실전 퀴즈

//1.users 배열에서 모든 사용자의 이름만 배열로 추출하세요
const user2 = [
  { name: 'Ghost', age: 20 },
  { name: 'Irangi', age: 22 },
  { name: 'Camel', age: 19 },
];
console.log(user2.map(x => x.name));

//2.user 객체를 복사하여 age만 30으로 바꾼 새 객체를 만드세요.
const user3 = { name: 'Ghost', age: 20 };
const newUser = Object.assign({}, user3);

newUser.age = 30;
console.log(user3);
console.log(newUser);

//3. person 객체에 동적으로 key와 value를 추가하세요. (key: hobby, value: soccer)
person['hobby'] = 'soccor';
console.log(person);

//4. 두 객체 obj1, obj2를 합쳐서 새 객체를 만드세요.
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const newObj = { ...obj1, ...obj2 };
console.log(newObj);

//5. person 객체의 모든 key와 value를 "key:value" 형태의 문자열 배열로 만드세요.
arr = [];
Object.entries(person).forEach(x => arr.push(x.join(':')));
console.log(arr);

// 6. users 배열에서 나이가 20 이상인 사람만 추출하세요.
const users = [
  { name: 'Ghost', age: 20 },
  { name: 'Camel', age: 19 },
  { name: 'Irangi', age: 22 },
];
const over20 = users.filter(x => x.age >= 20).map(x => x.name);
console.log(over20);

// 7. person 객체의 key와 value를 모두 대문자로 변환한 새 객체를 만드세요.
const person2 = { name: 'Ghost', hobby: 'soccer' };
let upperPerson2 = {};
Object.entries(person2).forEach(([k, v]) => {
  upperPerson2[k.toUpperCase()] = String(v).toUpperCase();
});
//구조분해할당해서 upperPerson2['HOBBY'] = 'SOCCER'로 새로운 객체 넣음
console.log(upperPerson2);

// 8.중첩 객체에서 내부 값에 접근하세요.
const person3 = { name: 'Ghost', info: { email: 'ghost@email.com' } };
console.log(person3.info.email);

//9. 객체의 모든 값이 숫자인지 true/false로 판별하세요.
const obj3 = { a: 1, b: 2, c: 3 };
const isNumber = Object.values(obj3).every(x => typeof x === 'number');
console.log(isNumber);

//10. users 배열에서 가장 나이가 많은 사람의 이름을 출력하세요.

const users2 = [
  { name: 'Ghost', age: 20 },
  { name: 'Camel', age: 19 },
  { name: 'Irangi', age: 22 },
];
const oldest = users2.reduce((a, b) => (a.age > b.age ? a : b)).name;
console.log(oldest);
// reduce에 사칙연산 말고도 if문을 넣어서 비교할 수 있다.

// Object 심화 퀴즈

// 1. 객체 obj를 깊은 복사(deep copy)하는 코드를 작성하세요.
const obj4 = { a: 1, b: { c: 2 } };
const deep = JSON.parse(JSON.stringify(obj4));
console.log(deep);

//JSON.stringify 는 객체를 문자열로({}를 포함한 문자열로)변환
//JSON.parse 는 문자열을 객체로 변환

// 2. 두 객체가 값이 같은지 얕은 비교(shallow equal)하는 함수를 작성하세요.
const a = { x: 1, y: 2 };
const b = { x: 1, y: 2 };
// 얕은 비교는 얕은 복사랑 다름
const isShallow = (a, b) => {
  return Object.keys(a).every(c => a[c] === b[c]);
};
console.log(isShallow(a, b));

//[if1] 입력한 나이에 따라 성인/ 미성년자 출력하기
const age = 18; // 예시 입력값
if (age >= 19) {
  console.log('성인');
} else {
  console.log('미성년자');
}

//[if2] 숫자를 입력하면 짝수인지 홀수인지 출력하기
const num = 7;
if (num % 2 === 0) {
  console.log('even하군요');
} else {
  console.log('odd even하지 않군요');
}

//[if3]사용자 점수에 따라 등급 (A~F) 나누기
const score = 82;
let grade;
const cutLine = [90, 80, 70, 60, 50];
if (score >= cutLine[0]) {
  grade = 'A';
} else if (score >= cutLine[1]) {
  grade = 'B';
} else if (score >= cutLine[2]) {
  grade = 'C';
} else if (score >= cutLine[3]) {
  grade = 'D';
} else if (score >= cutLine[4]) {
  grade = 'E';
} else {
  grade = 'F';
}

console.log(grade);

//[if4]사용자 이름이 특정 이름인지 확인하고 인사 출력하기
const name = 'Ghost';
if (name === 'Ghost') {
  console.log(`안녕하신가,${name}`);
} else {
  console.log('누...누구세요?');
}

//[if5]입력한 수가 0보다 크면"양수", 0이면 "0", 아니면 "음수"출력하기
const num1 = -3;
if (num1 === 0) {
  console.log('0');
} else if (num1 > 0) {
  console.log('양수');
} else {
  console.log('음수');
}

//[if6] 비밀번호가 일치하는지 검사하고 로그인 결과 출력하기.
const inputPw = '부엉이';
const userPw = '부엉이';
if (inputPw === userPw) {
  console.log('신원확인! 통과하십쇼');
} else {
  console.log('정지!정지!정지! 손 들고 뒤로 돌아!');
}

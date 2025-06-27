const heights = [150, 169, 185, 170];
const ghost = 167;
//heights에서 ghost보다 키가 큰사람이 몇 명인지 출력하시오.

const bigger = heights.filter(tall => tall => ghost).length;
console.log(`${ghost}보다 큰 사람은 ${bigger}명 입니다.`);

const words = ['hello', 'ghost', 'apple', 'grape', 'Lemon'];
// words 중에서 단어에 l 자가 들어있는 단어만 배열로 저장하시오. 조건, 대소문자 상관없이 모두 찾아야함

const findL = words.filter(word => word.toUpperCase().includes('L'));
console.log(findL);

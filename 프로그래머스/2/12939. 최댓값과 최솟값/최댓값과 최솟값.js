function solution(s) {
    // 문자열을 공백으로 분리하여 배열로 만듦
    const numbers = s.split(' ');

    // 배열의 요소를 숫자로 변환
    const parsedNumbers = numbers.map(Number);

    // 최소값과 최대값을 찾음
    const min = Math.min(...parsedNumbers);
    const max = Math.max(...parsedNumbers);

    // 결과 문자열을 반환
    return `${min} ${max}`;
}
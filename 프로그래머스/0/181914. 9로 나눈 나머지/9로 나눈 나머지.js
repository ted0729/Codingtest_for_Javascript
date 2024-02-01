function solution(number) {
    // 각 자리 숫자의 합을 구하기 위한 변수
    let sum = 0;

    // number의 각 자리 숫자를 순회
    for (let i = 0; i < number.length; i++) {
        sum += parseInt(number[i]);
    }

    // 합계를 9로 나눈 나머지 반환
    return sum % 9;
}
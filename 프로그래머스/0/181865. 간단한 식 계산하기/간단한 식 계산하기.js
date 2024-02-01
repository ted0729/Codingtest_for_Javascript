function solution(binomial) {
    // binomial을 공백 기준으로 분리하여 a, op, b 추출
    const parts = binomial.split(' ');
    const a = parseInt(parts[0]);
    const op = parts[1];
    const b = parseInt(parts[2]);

    // 추출된 op에 따라 조건문을 사용하여 계산 수행
    let answer = 0;
    if (op === '+') {
        answer = a + b;
    } else if (op === '-') {
        answer = a - b;
    } else if (op === '*') {
        answer = a * b;
    }

    return answer;
}
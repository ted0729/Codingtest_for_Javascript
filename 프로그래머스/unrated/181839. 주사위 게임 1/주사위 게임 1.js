function solution(a, b) {
    var answer = 0;

    if (a % 2 !== 0 && b % 2 !== 0) {
        // a와 b 모두 홀수인 경우
        answer = a * a + b * b;
    } else if (a % 2 !== b % 2) {
        // a와 b 중 하나만 홀수인 경우
        answer = 2 * (a + b);
    } else {
        // a와 b 모두 홀수가 아닌 경우
        answer = Math.abs(a - b);
    }

    return answer;
}

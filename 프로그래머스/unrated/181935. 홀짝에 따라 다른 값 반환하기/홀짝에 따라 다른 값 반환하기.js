function solution(n) {
    var answer = 0;
    
    if (n % 2 === 0) {
        // n이 짝수인 경우: 짝수의 제곱의 합
        for (let i = 2; i <= n; i += 2) {
            answer += i * i;
        }
    } else {
        // n이 홀수인 경우: 홀수의 합
        for (let i = 1; i <= n; i += 2) {
            answer += i;
        }
    }

    return answer;
}

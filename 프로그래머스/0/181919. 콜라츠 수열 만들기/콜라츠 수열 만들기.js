function solution(n) {
    let answer = [];
    
    while (n !== 1) {
        answer.push(n);
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            n = 3 * n + 1;
        }
    }
    answer.push(1); // 마지막으로 1 추가

    return answer;
}
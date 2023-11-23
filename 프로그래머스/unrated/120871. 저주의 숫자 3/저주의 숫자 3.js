function solution(n) {
    let answer = 0;
    let count = 0;

    while (count < n) {
        answer++;
        if (String(answer).includes('3') || answer % 3 === 0) {
            continue;
        }
        count++;
    }

    return answer;
}
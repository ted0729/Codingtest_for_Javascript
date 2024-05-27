function solution(n, t, m, p) {
    let answer = '';
    let currentNumber = 0;
    let sequence = '';
    
    // 필요한 만큼의 수를 나열
    while (sequence.length < t * m) {
        sequence += currentNumber.toString(n).toUpperCase();
        currentNumber++;
    }
    
    // 튜브가 말해야 하는 숫자들 추출
    for (let i = 0; i < t; i++) {
        answer += sequence[i * m + (p - 1)];
    }
    
    return answer;
}
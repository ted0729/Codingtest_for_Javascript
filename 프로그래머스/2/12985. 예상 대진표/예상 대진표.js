function solution(n, a, b) {
    var answer = 0;

    while (a !== b) {
        // A와 B의 번호를 2로 나눈 후 올림.
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        answer++; // 라운드를 하나 증가.
    }

    return answer;
}

function solution(n) {
    let a = 0, b = 1, c = 1;
    for (let i = 2; i <= n; i++) {
        c = (a + b) % 1234567; // 중간 결과도 1234567로 나눈 나머지를 사용
        a = b;
        b = c;
    }
    return c;
}

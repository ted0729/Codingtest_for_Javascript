function solution(n) {
    let a = 0;
    let b = 1;
    let temp;

    for (let i = 0; i < n; i++) {
        temp = (a + b) % 1234567; // 다음 항목은 이전 두 항목의 합.
        a = b; // 이전 항목을 한 단계 앞으로 옮긴다.
        b = temp; // 새로운 항목을 b에 저장.
    }

    return b; // n번째 항목 반환.
}

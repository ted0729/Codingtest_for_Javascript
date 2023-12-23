function solution(a, b, c) {
    let answer = 0;
    if (a === b && b === c) {
        // 세 숫자가 모두 같을 때
        answer = (a + b + c) * (a**2 + b**2 + c**2) * (a**3 + b**3 + c**3);
    } else if (a === b || b === c || a === c) {
        // 두 숫자만 같을 때
        answer = (a + b + c) * (a**2 + b**2 + c**2);
    } else {
        // 모든 숫자가 다를 때
        answer = a + b + c;
    }
    return answer;
}

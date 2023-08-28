function solution(x, n) {
    var answer = []; // 결과를 저장할 빈 배열
    for (let i = 1; i <= n; i++) {
        answer.push(x*i) // x에 i를 곱한 값을 결과 배열에 추가
    }
    return answer; // 완성된 결과 배열을 반환
}
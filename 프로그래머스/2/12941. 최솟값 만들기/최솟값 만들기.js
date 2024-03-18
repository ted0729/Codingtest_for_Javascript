function solution(A, B) {
    // 배열 A와 B를 오름차순으로 정렬
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);

    // 두 배열을 곱하여 누적된 값을 구함
    let answer = 0;
    for (let i = 0; i < A.length; i++) {
        answer += A[i] * B[B.length - 1 - i]; // A는 순서대로, B는 역순으로 탐색하여 곱함
    }

    return answer;
}
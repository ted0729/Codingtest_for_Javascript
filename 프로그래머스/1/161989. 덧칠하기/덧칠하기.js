function solution(n, m, section) {
    let answer = 0;
    let i = 0;
    const length = section.length;

    while (i < length) {
        answer++;  // 롤러를 사용하는 횟수 증가
        const start = section[i];  // 현재 롤러로 칠하기 시작할 첫 구역

        // 롤러로 m 길이만큼 최대한 많은 구역을 커버
        while (i < length && section[i] < start + m) {
            i++;
        }
    }

    return answer;
}

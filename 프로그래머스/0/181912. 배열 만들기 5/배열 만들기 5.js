function solution(intStrs, k, s, l) {
    let answer = [];

    // 각 원소에 대해 반복
    intStrs.forEach(str => {
        // s번 인덱스에서 시작하는 길이 l짜리 부분 문자열을 잘라내 정수로 변환
        const num = parseInt(str.substring(s, s + l));

        // 변환한 정수값이 k보다 큰 경우 배열에 추가
        if (num > k) {
            answer.push(num);
        }
    });

    return answer;
}
function solution(q, r, code) {
    let answer = '';
    // 문자열 code의 각 문자에 대하여 반복
    for (let i = 0; i < code.length; i++) {
        // 현재 문자의 인덱스를 q로 나눈 나머지가 r과 같다면
        if (i % q === r) {
            // 결과 문자열에 현재 문자를 추가
            answer += code[i];
        }
    }
    // 모든 문자 처리 후, 결과 문자열 반환
    return answer;
}
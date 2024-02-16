function solution(myString, pat) {
    let answer = 0;
    let position = 0;

    // 문자열 내에서 pat을 찾을 수 있는 동안 반복
    while (true) {
        // pat의 현재 위치 또는 다음 발생 위치를 찾음
        position = myString.indexOf(pat, position);
        
        // pat이 더 이상 문자열 내에서 발견되지 않으면 반복 종료
        if (position === -1) break;
        
        // pat을 찾았으므로 카운트 증가
        answer++;
        
        // pat이 겹칠 수 있으므로 시작 위치를 1 증가시킴
        position++;
    }

    return answer;
}
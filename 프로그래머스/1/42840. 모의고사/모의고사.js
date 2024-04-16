function solution(answers) {
    // 각 수포자의 찍기 패턴 정의
    const patterns = [
        [1, 2, 3, 4, 5],                  // 수포자 1
        [2, 1, 2, 3, 2, 4, 2, 5],         // 수포자 2
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]    // 수포자 3
    ];
    
    // 각 수포자의 정답 수를 저장할 배열
    const scores = [0, 0, 0];
    
    // 주어진 답안과 각 수포자의 찍기 패턴 비교
    answers.forEach((answer, index) => {
        patterns.forEach((pattern, patternIndex) => {
            // 패턴의 길이로 나눈 나머지를 인덱스로 사용하여 반복 패턴 처리
            if (answer === pattern[index % pattern.length]) {
                scores[patternIndex]++;
            }
        });
    });
    
    // 가장 높은 점수 찾기
    const maxScore = Math.max(...scores);
    
    // 가장 높은 점수를 받은 수포자 찾기 (인덱스 + 1 해서 반환)
    const result = [];
    scores.forEach((score, index) => {
        if (score === maxScore) {
            result.push(index + 1);
        }
    });
    // 역대급 머리 안돌아갔네 진짜
    return result;
}

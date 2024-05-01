function solution(brown, yellow) {
    let answer = [];
    
    // 노란색 격자의 모든 가능한 가로(x), 세로(y) 조합을 찾습니다.
    for (let y = 1; y <= Math.sqrt(yellow); y++) {
        if (yellow % y === 0) {
            let x = yellow / y;
            // 전체 카펫의 크기가 brown과 yellow의 합과 일치하는지 확인합니다.
            if ((x + 2) * (y + 2) === brown + yellow) {
                // 가로 길이는 세로 길이와 같거나 더 길어야 합니다.
                answer = [x + 2, y + 2].sort((a, b) => b - a);
                break;
            }
        }
    }
    
    return answer;
}

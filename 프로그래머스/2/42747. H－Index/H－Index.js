function solution(citations) {
    // 1. 인용 횟수를 내림차순으로 정렬.
    citations.sort((a, b) => b - a);
    let answer = 0;
    
    // 2. 배열을 순회하며 조건을 만족하는 최댓값 찾기.
    for (let i = 0; i < citations.length; i++) {
        // 인용 횟수가 현재 인덱스(실제 논문 수를 의미하려면 1을 더한 값)보다 크거나 같다면,
        // H-Index 후보 업데이트.
        if (citations[i] >= i + 1) {
            answer = i + 1;
        } else {
            // 인용 횟수가 현재 인덱스보다 작아지는 순간에 반복을 종료.
            break;
        }
    }
    
    return answer;
}

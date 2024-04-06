function solution(k, tangerine) {
    const sizeCount = {}; // 각 귤의 크기별 등장 횟수를 저장하는 객체
    tangerine.forEach(size => {
        if (sizeCount[size]) {
            sizeCount[size] += 1;
        } else {
            sizeCount[size] = 1;
        }
    });

    // 등장 횟수만 추출하여 내림차순 정렬
    const counts = Object.values(sizeCount).sort((a, b) => b - a);

    let total = 0; // 선택된 귤의 총 개수
    let answer = 0; // 선택된 다른 종류의 수
    for (let i = 0; i < counts.length; i++) {
        total += counts[i];
        answer += 1;
        if (total >= k) break; // k개 이상 선택되었다면 종료
    }

    return answer;
}

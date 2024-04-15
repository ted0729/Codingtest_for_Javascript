function solution(k, m, score) {
    // 사과 점수를 내림차순으로 정렬
    score.sort((a, b) => b - a);

    let maxProfit = 0;
    let i = 0;
    let n = score.length;

    // m개 단위로 상자를 만들 수 있는 만큼 만들기
    while (i + m <= n) {
        // 이번 상자의 최소 점수 찾기 (상자에 포함되는 마지막 사과)
        const minScoreInBox = score[i + m - 1];
        // 이 상자로 얻을 수 있는 이익 계산
        maxProfit += minScoreInBox * m;
        // 다음 상자를 위해 인덱스 이동
        i += m;
    }

    return maxProfit;
}

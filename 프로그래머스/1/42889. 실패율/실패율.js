function solution(N, stages) {
    let failureRates = [];

    for (let stage = 1; stage <= N; stage++) {
        let reached = 0;
        let notCleared = 0;

        stages.forEach(currentStage => {
            if (currentStage >= stage) { // 스테이지에 도달한 플레이어 계산
                reached++;
            }
            if (currentStage === stage) { // 스테이지를 클리어하지 못한 플레이어 계산
                notCleared++;
            }
        });

        // 실패율 계산, 도달한 플레이어가 없으면 실패율은 0
        let failureRate = reached === 0 ? 0 : notCleared / reached;
        failureRates.push({ stage: stage, rate: failureRate });
    }

    // 실패율 내림차순으로 정렬, 실패율이 같으면 스테이지 번호 오름차순으로 정렬
    failureRates.sort((a, b) => {
        if (b.rate === a.rate) {
            return a.stage - b.stage;
        }
        return b.rate - a.rate;
    });

    // 결과 배열 생성
    let answer = failureRates.map(item => item.stage);
    return answer;
}

function solution(d, budget) {
    let answer = 0;
    d.sort((a, b) => a - b); // 부서별 신청 금액을 오름차순으로 정렬
    for(let i = 0; i < d.length; i++) {
        if(budget - d[i] >= 0) { // 예산에서 현재 부서의 신청 금액을 뺐을 때 0 이상이면
            budget -= d[i]; // 예산에서 해당 금액을 뺌
            answer++; // 지원 가능한 부서의 수를 증가
        } else {
            break; // 예산이 부족해지면 반복 종료
        }
    }
    return answer;
}

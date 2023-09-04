function solution(k, score) {
   const award = []
   const answer = []
    for(let i = 0 ; i < score.length ; i ++) { // 점수를 전부 순회한다
        if(i < k) { // k날 까지의 점수를 모두 push
            award.push(score[i])
        }
        if(score[i] > Math.min(...award)) { // 만약 award의 가장 작은값보다 큰값이 있다면
            award.pop()                    // 마지막 배열값을빼고, 
            award.push(score[i])           // 그 값을 push
            award.sort((a,b) => b - a)       // 그리고 내림차순처리
        }
        answer.push(award.at(-1)) // 최하위의 점수를 push
    }                             // at(-1)은 배열의 가장 마지막 값 (지금 가장 작은값을 뜻하게된다)
    return answer
}
//  k=4 및 score=[0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]로 설정한 경우:

// i=0일 때, score[i]는 0이며, k=4이므로 award에 0을 push. award=[0]
// i=1일 때, score[i]는 300이고, award의 가장 작은 값은 0. 따라서 0을 제거하고 300을 추가한 뒤 내림차순으로 정렬. award=[300]
// 이러한 과정을 반복하면 answer 배열은 [0, 0, 0, 0, 20, 40, 70, 70, 150, 300]
// 결과적으로 answer 배열에는 최하위 점수가 저장되며, 이는 award 배열의 마지막 요소 award.at(-1)
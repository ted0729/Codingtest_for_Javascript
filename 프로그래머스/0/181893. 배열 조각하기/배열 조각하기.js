function solution(arr, query) {
    let answer = arr; // 초기 배열 설정
    
    for (let i = 0; i < query.length; i++) {
        if (i % 2 === 0) { // 짝수 인덱스일 때
            answer = answer.slice(0, query[i] + 1); // query[i] 인덱스까지 유지
        } else { // 홀수 인덱스일 때
            answer = answer.slice(query[i]); // query[i] 인덱스 이후부터 유지
        }
    }

    return answer;
}

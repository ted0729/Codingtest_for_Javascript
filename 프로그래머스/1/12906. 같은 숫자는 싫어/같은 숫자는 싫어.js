function solution(arr) {
    const answer = [];

    for (let i = 0; i < arr.length; i++) {
        // 현재 원소가 이전 원소와 다를 때만 answer에 추가
        if (i === 0 || arr[i] !== arr[i - 1]) {
            answer.push(arr[i]);
        }
    }

    return answer;
}
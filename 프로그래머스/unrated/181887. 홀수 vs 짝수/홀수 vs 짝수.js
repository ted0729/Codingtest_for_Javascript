function solution(num_list) {
    let oddSum = 0;  // 홀수 번째 원소들의 합
    let evenSum = 0; // 짝수 번째 원소들의 합

    for (let i = 0; i < num_list.length; i++) {
        if (i % 2 === 0) {
            oddSum += num_list[i]; // 인덱스가 짝수 (홀수 번째 원소)
        } else {
            evenSum += num_list[i]; // 인덱스가 홀수 (짝수 번째 원소)
        }
    }

    return Math.max(oddSum, evenSum); // 두 합 중 큰 값을 반환
}
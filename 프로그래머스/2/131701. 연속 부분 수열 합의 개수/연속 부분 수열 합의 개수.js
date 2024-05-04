function solution(elements) {
    const n = elements.length;
    const extended = [...elements, ...elements]; // 배열을 두 배로 확장
    const sums = new Set(); // 중복 없이 합을 저장하기 위한 집합

    // 모든 가능한 시작 위치에서 수열의 합 계산
    for (let start = 0; start < n; start++) {
        let currentSum = 0;
        for (let length = 1; length <= n; length++) {
            currentSum += extended[start + length - 1];
            sums.add(currentSum);
        }
    }

    return sums.size; // 중복을 제거한 합의 개수 반환
}

function solution(arr) {
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (arr[i][j] !== arr[j][i]) {
                return 0; // 조건을 만족하지 않으면 0 반환
            }
        }
    }

    return 1; // 모든 원소가 조건을 만족하면 1 반환
}
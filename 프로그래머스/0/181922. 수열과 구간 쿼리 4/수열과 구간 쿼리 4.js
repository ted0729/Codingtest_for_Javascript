function solution(arr, queries) {
    queries.forEach(query => {
        const [s, e, k] = query;
        for (let i = s; i <= e; i++) {
            // i가 k의 배수인지 확인할 때, 인덱스 i 자체를 사용
            if (i % k === 0) {
                arr[i] += 1; // 조건에 맞으면 arr[i]에 1을 더함
            }
        }
    });
    return arr;
}
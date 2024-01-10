function solution(arr, queries) {
    for (let query of queries) {
        const [i, j] = query;
        [arr[i], arr[j]] = [arr[j], arr[i]]; // 구조분해할당을 사용해서 값 교환
    }
    return arr;
}
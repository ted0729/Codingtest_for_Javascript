function solution(arr, queries) {
    queries.forEach(query => {
        const [start, end] = query;
        for (let i = start; i <= end; i++) {
            arr[i] += 1;
        }
    });
    return arr;
}
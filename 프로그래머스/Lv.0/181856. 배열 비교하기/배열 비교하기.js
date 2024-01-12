function solution(arr1, arr2) {
    // 길이 비교
    if (arr1.length !== arr2.length) {
        return arr1.length > arr2.length ? 1 : -1;
    }

    // 원소 합 비교
    const sum1 = arr1.reduce((acc, val) => acc + val, 0);
    const sum2 = arr2.reduce((acc, val) => acc + val, 0);
    
    if (sum1 === sum2) {
        return 0;
    }
    
    return sum1 > sum2 ? 1 : -1;
}
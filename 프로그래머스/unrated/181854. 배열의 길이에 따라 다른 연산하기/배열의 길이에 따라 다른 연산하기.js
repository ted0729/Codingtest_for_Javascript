function solution(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        // arr의 길이가 홀수인 경우, 짝수 인덱스에 n을 +
        if (arr.length % 2 !== 0 && i % 2 === 0) {
            arr[i] += n;
        }
        // arr의 길이가 짝수인 경우, 홀수 인덱스에 n을 +
        else if (arr.length % 2 === 0 && i % 2 !== 0) {
            arr[i] += n;
        }
    }
    return arr;
}

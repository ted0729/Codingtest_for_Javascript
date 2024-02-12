function solution(arr, flag) {
    let X = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (flag[i]) {
            // flag[i]가 true일 때 arr[i]를 arr[i] * 2 번 추가
            for (let j = 0; j < arr[i] * 2; j++) {
                X.push(arr[i]);
            }
        } else {
            // flag[i]가 false일 때 마지막 arr[i]개의 원소를 제거
            X.splice(-arr[i], arr[i]);
        }
    }
    
    return X;
}
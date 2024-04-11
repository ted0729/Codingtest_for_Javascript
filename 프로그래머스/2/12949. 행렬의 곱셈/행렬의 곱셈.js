function solution(arr1, arr2) {
    let answer = [];

    // 결과 행렬의 행을 돈다
    for (let i = 0; i < arr1.length; i++) {
        answer[i] = [];
        // 결과 행렬의 열을 순회
        for (let j = 0; j < arr2[0].length; j++) {
            let sum = 0;
            // arr1의 i번째 행과 arr2의 j번째 열을 곱한 후 합산
            for (let k = 0; k < arr1[0].length; k++) {
                sum += arr1[i][k] * arr2[k][j];
            }
            answer[i][j] = sum;
        }
    }

    return answer;
}

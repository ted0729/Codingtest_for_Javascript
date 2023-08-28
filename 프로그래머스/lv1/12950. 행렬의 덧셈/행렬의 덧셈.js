function solution(arr1, arr2) {
    var answer = []; // 새로운 행렬을 저장할 변수
    // 행렬의 행 개수만큼 반복
    for (let i = 0; i < arr1.length; i++) { // [[1,2],[2,3]]
        var row = []; // 현재 행의 결과를 저장할 변수
        // 행렬의 열 개수만큼 반복
        for (let j = 0; j < arr1[i].length; j++) {
            // 현재 위치의 요소를 더해서 row 배열에 추가
            row.push(arr1[i][j] + arr2[i][j]); // [1+3, 2+4]
        }
        // 현재 행의 결과인 row 배열을 answer 배열에 추가
        answer.push(row);
    }

    return answer; // 새로운 행렬을 반환
}
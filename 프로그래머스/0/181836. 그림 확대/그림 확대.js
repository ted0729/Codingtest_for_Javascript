function solution(picture, k) {
    let answer = [];

    for (let row of picture) {
        // 각 행의 각 문자를 k배 확대
        let newRow = row.split('').map(char => char.repeat(k)).join('');
        
        // 생성된 새로운 행을 k번 반복하여 answer 배열에 추가
        for (let i = 0; i < k; i++) {
            answer.push(newRow);
        }
    }

    return answer;
}

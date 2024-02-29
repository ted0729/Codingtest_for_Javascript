function solution(arr) {
    let answer = 0;
    let prev, current;

    // 반복적으로 조건에 맞게 배열을 변환
    while (true) {
        // 현재 배열의 상태를 이전 상태로 설정
        prev = arr.toString();
        // 현재 배열을 조건에 맞게 변환
        arr = arr.map(num => {
            if (num >= 50 && num % 2 === 0) {
                return num / 2;
            } else if (num < 50 && num % 2 !== 0) {
                return num * 2 + 1;
            } else {
                return num;
            }
        });
        // 변환된 배열의 상태를 문자열로 변환하여 현재 상태와 비교
        current = arr.toString();

        // 이전 상태와 현재 상태가 동일하다면, 변화가 없으므로 반복을 종료
        if (prev === current) {
            break;
        }
        // 변화가 있었다면, answer를 1 증가
        answer++;
    }

    return answer;
}
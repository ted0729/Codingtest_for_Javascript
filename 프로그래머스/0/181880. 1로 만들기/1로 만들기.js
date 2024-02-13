function solution(num_list) {
    let answer = 0;

    // 각각에 대해 연산 수행
    for (let num of num_list) {
        while (num > 1) {
            // 짝수인 경우
            if (num % 2 === 0) {
                num = num / 2;
            } else {
                // 홀수인 경우 1을 빼고 2로 나눔
                num = (num - 1) / 2;
            }
            answer++; // 연산 횟수 증가
        }
    }

    return answer;
}
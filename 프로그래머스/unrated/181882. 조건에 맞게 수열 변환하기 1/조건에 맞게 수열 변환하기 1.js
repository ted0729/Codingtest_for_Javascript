function solution(arr) {
    var answer = arr.map(num => {
        if (num >= 50 && num % 2 === 0) {
            // 50 이상의 짝수
            return num / 2;
        } else if (num < 50 && num % 2 !== 0) {
            // 50 미만의 홀수
            return num * 2;
        }
        return num;
    });
    return answer;
}

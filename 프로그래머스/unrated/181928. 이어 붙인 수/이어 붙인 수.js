function solution(num_list) {
    let oddStr = '';
    let evenStr = '';

    // 홀수와 짝수를 구분하여 문자열로 이어 붙이기
    num_list.forEach(num => {
        if (num % 2 === 0) {
            evenStr += num.toString();
        } else {
            oddStr += num.toString();
        }
    });

    // 문자열을 10진수 숫자로 변환 후 합 계산
    let oddNum = parseInt(oddStr, 10);
    let evenNum = parseInt(evenStr, 10);

    return oddNum + evenNum;
}

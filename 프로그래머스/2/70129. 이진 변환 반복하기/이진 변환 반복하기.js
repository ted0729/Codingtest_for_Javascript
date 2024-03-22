function solution(s) {
    let count = 0; // 이진 변환의 횟수
    let removedZeros = 0; // 제거된 0의 개수

    while (s !== "1") {
        let lengthBefore = s.length;
        s = s.replace(/0/g, ''); // 모든 0을 제거
        let lengthAfter = s.length;
        removedZeros += (lengthBefore - lengthAfter); // 제거된 0의 개수를 더함
        s = lengthAfter.toString(2); // 남은 문자열의 길이를 2진수로 변환
        count++;
    }

    return [count, removedZeros];
}

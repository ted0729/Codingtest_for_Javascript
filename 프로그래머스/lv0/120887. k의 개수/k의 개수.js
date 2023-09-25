function solution(i, j, k) {
    var answer = 0; // 결과값을 저장할 변수를 초기화

    for (let num = i; num <= j; num++) {
        let numStr = num.toString(); // 현재 숫자를 문자열로 변환하여 각 자릿수를 검사하기 위해 문자열로 저장
        
        for (let digit of numStr) { // 문자열로 저장한 숫자의 각 자릿수를 순회
            if (Number(digit) === k) { // 숫자로 변환한 자릿수와 k를 비교하여 같으면 아래 코드를 실행
                answer++; // 결과값을 1 증가
            }
        }
    }

    return answer; // 최종적으로 결과값을 반환
}

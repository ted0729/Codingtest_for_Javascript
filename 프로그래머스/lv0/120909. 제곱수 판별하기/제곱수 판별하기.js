function solution(n) {
    var answer = 0;
    const squareNumber = Math.sqrt(n) // 제곱근 구하는 메소드
    
    if (Math.floor(squareNumber) === squareNumber) {
        answer = 1;  // 제곱수가 아니면 예를 들어 5는 2.xxx의 제곱근이 나오므로,
    } else {         // 소수점을 뺀값과 같은지 비교하면 제곱수인지 아닌지 판별된다.
        answer = 2;
    }
    
    return answer;
}
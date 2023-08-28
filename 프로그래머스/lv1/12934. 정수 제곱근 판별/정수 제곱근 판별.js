function solution(n) {
    var answer = 0;
    sqrt = Math.sqrt(n); // n의 제곱근을 반환! 제곱근 = 제곱되긴 전의 값..
    
    if (sqrt % 1 !== 0) { // 제곱근을 1로 나눈값이 0이면 정수, 아니면 소수 !
        answer = -1;      // 3, 7 등이 소수로 나온다..
    } else {
        answer = Math.pow(sqrt + 1, 2); // Math.pow(제곱될 값, 제곱 값)
    }                                   // 문제 설명을 보면 x+1를 제곱하라고 했으니 그대로하면된다.
    return answer;
}

// function solution(n) {
 
//     return Math.sqrt(n) % 1 !== 0 ? -1 : Math.pow(Math.sqrt(n) + 1, 2);
// }

// n값이 i값의 제곱이라면 제곱값을 리턴
// 아니면 -1 이니까
// 삼항연산자 사용을 하면되는걸까?
// Math.sqrt(n) : 숫자 n의 제곱근을 반환.
// Math.pow(base, exponent) : base에 exponent를 제곱한 값을 반환.

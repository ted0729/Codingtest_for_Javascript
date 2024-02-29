function solution(a, b) {
    // 문자열 a와 b를 BigInt로 변환
    let numA = BigInt(a);
    let numB = BigInt(b);
    
    // 두 BigInt를 더한 뒤, 문자열로 변환하여 반환
    let sum = numA + numB;
    return sum.toString();
}
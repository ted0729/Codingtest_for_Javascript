function solution(arr) {
    // 최대공약수 구하는 함수
    function gcd(a, b) {
        while (b !== 0) {
            let r = a % b;
            a = b;
            b = r;
        }
        return a;
    }

    // 최소공배수 구하는 함수
    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }

    // 배열의 모든 요소에 대한 최소공배수 구하기
    return arr.reduce((acc, cur) => lcm(acc, cur), 1);
}
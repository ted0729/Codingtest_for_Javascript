function gcd(a, b) {
    // 최대공약수를 구하는 함수
    while (b !== 0) {
        let r = a % b;
        a = b;
        b = r;
    }
    return a;
}

function solution(a, b) {
    // 분자와 분모의 최대공약수를 구함
    let g = gcd(a, b);
    // 기약분수로 만듬
    a /= g;
    b /= g;

    // 분모를 소인수분해하며 2와 5 이외의 소인수가 있는지 확인.
    while (b % 2 === 0) b /= 2;
    while (b % 5 === 0) b /= 5;

    // 분모가 1이면 2와 5만의 소인수로 이루어져 있으므로 유한소수.
    return b === 1 ? 1 : 2;
}

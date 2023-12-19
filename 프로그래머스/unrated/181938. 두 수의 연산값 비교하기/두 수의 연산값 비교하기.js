function solution(a, b) {
    let opResult = parseInt(`${a}${b}`);
    let productResult = 2 * a * b;
    return Math.max(opResult, productResult);
}
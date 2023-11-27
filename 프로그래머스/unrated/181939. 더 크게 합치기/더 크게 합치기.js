function solution(a, b) {
    const ab = parseInt(`${a}${b}`);
    const ba = parseInt(`${b}${a}`);
    return Math.max(ab, ba);
}

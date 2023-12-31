function solution(A, B) {
    if (A.length !== B.length) return -1;
    if (A === B) return 0;

    for (let i = 1; i < A.length; i++) {
        let shifted = A.slice(-i) + A.slice(0, A.length - i);

        if (shifted === B) {
            return i;
        }
    }

    return -1;
}

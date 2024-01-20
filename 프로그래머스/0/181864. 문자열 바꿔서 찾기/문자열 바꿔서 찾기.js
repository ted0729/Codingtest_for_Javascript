function solution(myString, pat) {
    // 'A'를 'B'로, 'B'를 'A'로 바꾸기
    const transformed = myString.replace(/A/g, 'x').replace(/B/g, 'A').replace(/x/g, 'B');

    // 바뀐 문자열이 pat를 포함하는지 확인
    return transformed.includes(pat) ? 1 : 0;
}
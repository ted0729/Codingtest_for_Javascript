function solution(before, after) {
    var answer = 0;
    const sortedBefore = before.split('').sort().join('');
    const sortedAfter = after.split('').sort().join('');

    // 정렬된 문자열이 동일하면 1을 반환, 아니면 0을 반환
    if (sortedBefore === sortedAfter) {
        return 1;
    } else {
        return 0;
    }
}


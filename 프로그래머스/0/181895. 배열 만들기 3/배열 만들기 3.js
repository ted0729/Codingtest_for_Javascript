function solution(arr, intervals) {
    // 첫 번째 구간과 두 번째 구간 추출
    const firstInterval = arr.slice(intervals[0][0], intervals[0][1] + 1);
    const secondInterval = arr.slice(intervals[1][0], intervals[1][1] + 1);

    // 두 구간을 이어붙여 반환
    return firstInterval.concat(secondInterval);
}
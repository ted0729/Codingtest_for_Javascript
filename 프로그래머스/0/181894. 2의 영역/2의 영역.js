function solution(arr) {
    // 배열 내에서 모든 2의 인덱스 찾기
    const indices = arr.reduce((acc, val, index) => {
        if (val === 2) acc.push(index);
        return acc;
    }, []);

    // 배열에 2가 없는 경우
    if (indices.length === 0) {
        return [-1];
    }

    // 가장 작은 인덱스와 가장 큰 인덱스를 사용하여 부분 배열 추출
    const startIndex = indices[0];
    const endIndex = indices[indices.length - 1];

    return arr.slice(startIndex, endIndex + 1);
}
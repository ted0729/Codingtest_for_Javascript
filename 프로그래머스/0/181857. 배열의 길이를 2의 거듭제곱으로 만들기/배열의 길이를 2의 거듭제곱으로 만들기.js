function solution(arr) {
    // 현재 배열의 길이
    let currentLength = arr.length;
    // 가장 가까운 2의 거듭제곱 찾기
    let nextPowerOfTwo = 1;
    while (nextPowerOfTwo < currentLength) {
        nextPowerOfTwo *= 2;
    }
    // 필요한 0의 개수 계산
    let zerosToAdd = nextPowerOfTwo - currentLength;
    // 0 추가
    for (let i = 0; i < zerosToAdd; i++) {
        arr.push(0);
    }
    return arr;
}
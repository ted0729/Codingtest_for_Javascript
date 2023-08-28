function solution(arr) {
    let min = Math.min(...arr); 
    let minIndex = arr.indexOf(min); // 최솟값의 인덱스

    arr.splice(minIndex, 1); // 최솟값을 배열에서 1개를 제거

    return arr.length > 0 ? arr : [-1];
}
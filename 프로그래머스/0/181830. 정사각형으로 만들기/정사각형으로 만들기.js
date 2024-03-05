function solution(arr) {
    const rows = arr.length;
    const cols = arr[0].length;

    // 행의 수와 열의 수가 같으면 arr을 그대로 반환
    if (rows === cols) {
        return arr;
    }

    // 행의 수가 더 많은 경우, 각 행의 끝에 0을 추가
    if (rows > cols) {
        return arr.map(row => [...row, ...Array(rows - cols).fill(0)]);
    }

    // 열의 수가 더 많은 경우, 새로운 행에 0을 추가하여 행의 수를 맞춤
    const answer = [...arr, ...Array(cols - rows).fill().map(() => Array(cols).fill(0))];
    return answer;
}

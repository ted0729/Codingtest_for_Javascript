function solution(n, works) {
    // 만약 모든 작업량의 합이 n보다 작거나 같으면 피로도는 0.
    if (works.reduce((acc, cur) => acc + cur, 0) <= n) {
        return 0;
    }

    // 작업량을 내림차순으로 정렬.
    works.sort((a, b) => b - a);

    // n시간 동안 가장 큰 작업량부터 1씩 감소.
    while (n > 0) {
        // 최대 작업량의 인덱스(0번 인덱스)에서 1을 감소.
        works[0]--;
        n--;
        
        // 수정된 작업량을 다시 정렬.
        // 다음 최대값을 맨 앞으로 옮기기 위함.
        let i = 0;
        while (i < works.length - 1 && works[i] < works[i + 1]) {
            let temp = works[i];
            works[i] = works[i + 1];
            works[i + 1] = temp;
            i++;
        }
    }

    // 최종적으로 남은 작업량으로 야근 피로도 계산.
    return works.reduce((acc, cur) => acc + cur * cur, 0);
}

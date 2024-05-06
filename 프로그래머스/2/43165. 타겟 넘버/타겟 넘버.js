function solution(numbers, target) {
    let answer = 0;
    
    function dfs(index, sum) {
        if (index === numbers.length) {
            if (sum === target) {
                answer++;
            }
            return;
        }
        
        dfs(index + 1, sum + numbers[index]); // 현재 수를 더하는 경우
        dfs(index + 1, sum - numbers[index]); // 현재 수를 빼는 경우
    }
    
    dfs(0, 0); // 초기 인덱스와 합은 0부터 시작
    return answer;
}
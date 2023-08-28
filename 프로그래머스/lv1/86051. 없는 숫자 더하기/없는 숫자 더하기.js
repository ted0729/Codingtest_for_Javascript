function solution(numbers) {
    var answer = 0;
    
    for(let i = 0; i <= 9; i++) {
        if(!numbers.includes(i)) { // numbers 에 포함되지 않은 요소값이 있다면,,
            answer += i;           // 그 값끼리 더해줘라..
        }
    }
    
    return answer;
}
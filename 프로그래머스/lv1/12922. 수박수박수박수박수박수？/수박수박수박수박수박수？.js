function solution(n) {
    var answer = '';
    for(let i = 1; i <= n; i++) { // 자연수니까 초기값은 1로 시작한다.
        if(i % 2 === 0){ 
            answer += "박"; // n값이 짝수일때, "박"을 카운팅
        } else {
            answer += "수"; // n값이 홀수일땐, "수"을 카운팅
        }
    }
    
    return answer;
}
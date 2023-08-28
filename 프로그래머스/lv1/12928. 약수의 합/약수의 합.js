function solution(n) {
    var answer = 0;
    
    for (let i = 0; i <= n; i++) {
        if (n % i == 0) {
            answer += i; // i 로 나눴을떄 나머지가 0 이여야 약수니까, 약수인 i값이 나올때마다 더해줘
        }
    }
    return answer;
}


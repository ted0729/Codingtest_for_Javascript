function solution(n) {
    var answer = [];
    
    for (let i = 1; i <= n / 2; i++){
        if (n % i == 0) answer.push(i)
        
    }
    answer.push(n)
    
    return answer.length;
}

// n의 약수를 전부 구해서 나열한뒤,,
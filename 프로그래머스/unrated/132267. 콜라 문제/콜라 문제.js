function solution(a, b, n) {
    let answer = 0
    while(n >= a) { // 빈병 개수가 교환가능한 빈병 개수보다 높을때만 돌리기
        answer += Math.floor(n / a) * b
        n = Math.floor(n / a) * b + n % a
    } 
    return answer
}

// while 의 반복이 헷갈렸다 처음 써본건데,
// n값의 코드로인해 a값보다 작아질때까지 answer값에 + 되는것.
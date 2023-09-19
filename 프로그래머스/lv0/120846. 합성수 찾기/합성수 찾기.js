function solution(n) {
    var answer = 0;
    for( let i = 1 ; i <= n ; i++){
        let counter = 0
        for ( let j = 1 ; j <= i ; j++){
            if ( i % j === 0) {
                counter += 1 // 약수를 구해서 카운팅해줘요.
            }
        }
        if (counter >= 3) { // 약수의 개수가 3이상이면,
            answer += 1
        }
    }
    return answer;
}
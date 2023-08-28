function solution(n) {
    var answer = 0;
    let opposite = n.toString(3).split('').reverse().join('')
    return parseInt(opposite, 3)
}

// 10진수  -> 2진수( 3, 4, 5...N 진수)
// n.toString(N)

// 2진수 ( 3, 4, 5...N 진수 ) -> 10진수
// parseInt(number,N)
function solution(numer1, denom1, numer2, denom2) {
    let numer = numer1 * denom2 + numer2 * denom1
    let denom = denom1 * denom2
    let maximum = 1 // 최대공약수를 기본값 1로 설정하고,
    // 이 문제는 기약분수를 뽑아내는 문제다 (기약분수 : 분모와 분자 사이에 더 이상 약분할 수 없는 분수)
    // 왜냐하면 첫번째 예시의 값은 기약분수로 return 이 출력되있다.
    // 따로 문제에서 말이없었다면 [10, 8]도 답이겠지.
    // 최대공약수를 찾아내자. 
    for (let i = 1; i <= numer; i++) {
        if(numer % i === 0 && denom % i === 0) {
            maximum = i
        }
    }
    return [numer / maximum, denom / maximum]
}

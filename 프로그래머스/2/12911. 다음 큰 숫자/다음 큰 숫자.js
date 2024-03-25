function solution(n) {
    const countOnes = n => n.toString(2).split('').filter(x => x === '1').length;
    const onesInN = countOnes(n);
    let answer = n + 1;
    
    while (countOnes(answer) !== onesInN) {
        answer++;
    }
    
    return answer;
}

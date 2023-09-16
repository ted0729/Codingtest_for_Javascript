function solution(num, k) {
    var answer = 0;
    let newNum = num.toString().split("")
    
    for ( let i = 0 ; i <= newNum.length ; i++){
        if( newNum[i] === k.toString() ) {
            return i + 1; // 순번은 1부터 시작하기때문에 + 1로 시작
        }
    }
    return -1;
}
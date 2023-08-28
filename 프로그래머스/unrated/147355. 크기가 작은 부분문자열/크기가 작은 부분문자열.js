function solution(t, p) {
    var answer = 0;
    
    for(let i = 0; i <= t.length - p.length; i++){ // [0], [1], [2], [3], [4], [5]
        let Num = t.substr(i, p.length);           // 314, 141, 415, 159, 592, 92 => x
        if (Number(Num) <= Number(p))
            answer ++;
    }
    
    return answer;
}
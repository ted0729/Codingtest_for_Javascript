function solution(s) {
    var answer = parseInt(s); // 먼저 s값의 요소를 전부 숫자형으로 바꿔준다.  
    
    if((s.length === 4 || s.length === 6) && s == answer) { // 여기서 s === answer는 사용불가.
                                                            // s는 현재 문자열이고, Number(s)는 숫자형이니까 type이 다름..
        answer = true;  // 길이가 4 or 6이고, s값이 숫자형입니까? 그럼 true
    } else {
        answer = false; // 아니면? 숫자형이 아닌게 있으니 false
    }
    
    return answer;
}
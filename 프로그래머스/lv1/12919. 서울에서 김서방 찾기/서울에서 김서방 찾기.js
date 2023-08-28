function solution(seoul) {
    var answer = '';
    
    for(let i = 0; i < seoul.length; i++) {
        if (seoul[i] === "Kim")
            answer = "김서방은 " + i +"에 있다" // 그냥 i만 써도된다...허무
    }
    
    return answer;
}

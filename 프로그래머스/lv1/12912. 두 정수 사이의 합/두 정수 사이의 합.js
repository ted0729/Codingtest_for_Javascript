function solution(a, b) {
    var answer = 0;
    
    if (a >= b) {    // 예시 -> (5, 3)
        for (let i = b; i <= a; i++) {
            answer += i; // 3 + 4 + 5
        }
    } else {
        for (let j = a; j <= b; j++) { // -> if(a <= b)   // 예시 -> (3, 5)
            answer += j; // 3 + 4 + 5
        }
    }    
     return answer;
}

// if문을 써야할까.. 
// for문 인가..?
// 둘 다 써야되나??
// >= 의 반대는 < 가 아니고, <= 인건가?
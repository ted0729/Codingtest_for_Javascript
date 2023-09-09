function solution(hp) {
    var answer = 0;
    
    while(hp >= 5) { // 장군개미로 최대한 hp을 깎아내고
        hp = hp - 5
        answer ++;
    } while(hp >= 3) { // 병정개미로 남은 hp을 깎는다
        hp = hp - 3
        answer ++;
    } answer += hp // 그리고도 체력이 남으면 남은 hp만큼 일개미 1마리씩 추가.
                   // 남은 hp이 없으면 + 0 이다.
    return answer;
}

// function solution(hp) {
//     var answer = 0;
    
//     if (hp >= 5) {
//         answer += Math.floor(hp / 5);
//         hp %= 5;
//     } if (hp >= 3) {
//         answer += Math.floor(hp / 3);
//         hp %= 3;
//     } answer += hp;
    
//     return answer;
// }

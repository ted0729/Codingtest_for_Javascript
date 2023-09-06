// function solution(money) {
//     var answer = [];
    
//     answer = [Math.floor(money / 5500), (money % 5500)]
    
//     return answer;
// }

function solution(money) {
    var answer = [0, 0];
        answer[0] = Math.floor(money / 5500), // 몇 잔 마셨니?
        answer[1] = money - (5500 * answer[0]) // 있던 돈에서 구입 한 수 * 5500은 남은 돈
    return answer;
}
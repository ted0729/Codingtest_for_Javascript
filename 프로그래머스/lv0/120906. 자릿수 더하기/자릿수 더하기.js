function solution(n) {
    var answer = 0;
    
    answer = n.toString().split('').reduce((acc, cur) => acc + cur * 1, 0)
    // toString으로 문자열 변환뒤, split으로 하나하나뽑아준 요소를, reduce로 전부 더한 뒤 * 1 를해서 숫자형으로 변환한다.
    return answer
}

// function solution(n) {
//     const answer = 0;
//     const sum = n.toString();
    
//     for ( let i = 0; i < sum.length; i++) {
//         answer += parseInt(sum[i]);
//     }
//     return answer;
// }
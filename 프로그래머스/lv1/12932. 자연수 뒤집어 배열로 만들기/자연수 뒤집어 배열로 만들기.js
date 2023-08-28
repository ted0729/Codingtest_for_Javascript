// function solution(n) {
//     var answer = [];
//     let m = String(n).split('').reverse();
    
//     for(let i = 0; i < m.length; i++){
//         answer.push(parseInt(m[i]));
//     }
//     return answer;
// }

function solution(n) {
    let answer = [];
    n = n.toString().split('')
    n.forEach((a) => {
        answer.push(Number(a))
    })
    return answer.reverse()
}
        
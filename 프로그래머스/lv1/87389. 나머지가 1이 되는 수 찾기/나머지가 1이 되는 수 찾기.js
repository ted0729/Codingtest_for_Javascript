function solution(n) {
    var answer = 0;
    
    for(let i = 0; i <= n; i++) {
        if (n % i == 1) return i;
    }
}

//   function solution(n) {
//     let answer = 0;
//     for (let i = 0; i < n; i++) {
//         if(n % i == 1) {
//             answer = i;
//             break;
//         }
//     }
//         return answer;
// }

//         if (answer > 0) {
//             break;
//         }

//         if (n % i == 1) {
//             answer = i;    

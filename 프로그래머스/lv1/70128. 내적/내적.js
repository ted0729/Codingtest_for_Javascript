function solution(a, b) {
    var answer = 0;
    
    for(let i = 0; i < a.length; i++){
        answer += (a[i] * b[i]);
    }
    
    return answer;
}


// function solution(a, b) {
//     var answer = 0;
    
//     for(let i = 0; i < a.length; i++){
//         for(let j = 0; j < b.length; j++){
//             answer = answer + Number(a[i] * b[j]);
//         }
//     }
//     return answer;
// }
// 왜 a랑 b을 나눠 생각해야한다고 했을까? 
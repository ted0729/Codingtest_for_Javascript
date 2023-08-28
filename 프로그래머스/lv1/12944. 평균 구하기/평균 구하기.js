// function solution(arr) {
//     var answer = 0;
//     return arr.reduce((a, b) => a + b) / arr.length;
// }

// function solution(arr) {
//   return arr.reduce((sum누적값, current현재값) => sum + current) / arr.length;
// }

function solution(arr) {
    var answer = 0;
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++){
     sum = sum + parseInt(arr[i]);
    }
    return answer = sum / arr.length;
}
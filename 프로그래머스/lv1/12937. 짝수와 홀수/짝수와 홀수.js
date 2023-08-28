function solution(num) {
    var answer = '';
    // if(num%2 === 0){
    //     answer = "Even"
    // } else {
    //     answer = "Odd"
    // }
    answer = num % 2 === 0 ? "Even" : "Odd"
    return answer;
}

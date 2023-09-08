function solution(my_string) {
    var answer = 0;
    const newString = my_string.replaceAll(/[a-zA-Z]/g, "").split("")
    
    for(let i = 0; i < newString.length; i++) {
        answer += Number(newString[i])
    }
    return answer;
}

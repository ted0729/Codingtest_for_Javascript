function solution(age) {
    let answer = "";
    let newAge = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    age = age.toString();

    for(let i = 0; i < age.length; i++){
        answer += newAge[age[i]]; // age는 0~9
    }
    return answer;
}
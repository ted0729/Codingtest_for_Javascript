function solution(my_string) {
    let newWord = [...new Set(my_string)].join("")
    return newWord;
}
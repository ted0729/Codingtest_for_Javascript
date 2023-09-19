function solution(my_string) {
    var answer = '';
    let lowString = my_string.toLowerCase() // 문자열을 소문자로 변환
    let sortArray = lowString.split('').sort() // 문자열을 배열로 변환하고 오름차순
    answer = sortArray.join('') // 배열을 join 사용해서 문자열로 변환
    return answer
}
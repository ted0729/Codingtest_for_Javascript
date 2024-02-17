function solution(myStr) {
    // "a", "b", "c"를 구분자로 사용하여 문자열을 나눔
    let splitStr = myStr.split(/[abc]/);

    // 나눠진 문자열 중에서 빈 문자열이 아닌 것들만 필터링
    let answer = splitStr.filter(part => part !== '');

    // 결과 배열이 비어있다면 ["EMPTY"] 반환, 아니면 결과 배열 반환
    return answer.length > 0 ? answer : ["EMPTY"];
}

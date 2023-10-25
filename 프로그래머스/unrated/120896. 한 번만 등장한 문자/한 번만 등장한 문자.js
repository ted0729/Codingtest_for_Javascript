function solution(s) {
    let uniqueChars = [];
    for (let char of s) {
        if (s.indexOf(char) === s.lastIndexOf(char)) {
            uniqueChars.push(char); // 빈배열안에 중복값이 문자열로 들어간다 ""
        }
    }
    return uniqueChars.sort().join('');
}
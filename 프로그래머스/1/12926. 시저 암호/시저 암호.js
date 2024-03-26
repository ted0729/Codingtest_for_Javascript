function solution(s, n) {
    let answer = '';
    
    for (let i = 0; i < s.length; i++) {
        let charCode = s.charCodeAt(i);
        
        if (charCode >= 65 && charCode <= 90) {
            // 대문자 A-Z
            answer += String.fromCharCode((charCode - 65 + n) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            // 소문자 a-z
            answer += String.fromCharCode((charCode - 97 + n) % 26 + 97);
        } else {
            // 공백이나 기타 문자
            answer += s[i];
        }
    }
    
    return answer;
}

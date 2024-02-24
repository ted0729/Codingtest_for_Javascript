function solution(my_string) {
    let answer = new Array(52).fill(0); // 알파벳 대문자 26개 + 소문자 26개 = 총 52개의 공간을 0으로 초기화

    for (let char of my_string) {
        const charCode = char.charCodeAt(0);
        
        // 대문자인 경우
        if (charCode >= 65 && charCode <= 90) {
            answer[charCode - 65] += 1;
        }
        // 소문자인 경우
        else if (charCode >= 97 && charCode <= 122) {
            answer[26 + charCode - 97] += 1;
        }
    }

    return answer;
}
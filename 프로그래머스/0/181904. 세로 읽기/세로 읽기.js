function solution(my_string, m, c) {
    let answer = '';
    
    // m 글자씩 분할하여 각 분할된 문자열의 c-1 인덱스 문자를 연결
    for (let i = 0; i < my_string.length; i += m) {
        answer += my_string[i + c - 1];
    }
    
    return answer;
}
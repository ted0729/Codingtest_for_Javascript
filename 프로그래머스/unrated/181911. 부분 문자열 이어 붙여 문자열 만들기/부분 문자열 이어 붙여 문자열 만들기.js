function solution(my_strings, parts) {
    let answer = '';

    for (let i = 0; i < my_strings.length; i++) {
        const [s, e] = parts[i];
        answer += my_strings[i].substring(s, e + 1); // substring은 끝 인덱스를 포함하지 않으므로 e+1
    }

    return answer;
}
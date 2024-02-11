function solution(my_string, s, e) {
    // 문자열을 배열로 변환
    let arr = my_string.split('');
    
    // s부터 e까지의 부분을 뒤집기
    while (s < e) {
        // 두 문자 위치 바꾸기
        let temp = arr[s];
        arr[s] = arr[e];
        arr[e] = temp;
        
        // 인덱스 조정
        s++;
        e--;
    }
    
    // 배열을 문자열로 합치기
    answer = arr.join('');
    return answer;
}
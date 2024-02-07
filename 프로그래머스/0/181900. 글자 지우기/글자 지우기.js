function solution(my_string, indices) {
    // my_string을 배열로 변환
    let arr = my_string.split('');
    
    // indices 배열을 정렬
    indices.sort((a, b) => a - b);
    
    // 뒤에서부터 문자 제거하기 (앞에서부터 제거하면 인덱스가 바뀌므로)
    for (let i = indices.length - 1; i >= 0; i--) {
        arr.splice(indices[i], 1);
    }
    
    // 배열을 문자열로 합치기
    answer = arr.join('');
    return answer;
}
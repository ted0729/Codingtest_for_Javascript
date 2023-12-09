function solution(num_list) {
    // 먼저 리스트를 오름차순으로 정렬
    num_list.sort((a, b) => a - b);

    // 정렬된 리스트에서 앞의 5개 요소를 반환
    return num_list.slice(0, 5);
}

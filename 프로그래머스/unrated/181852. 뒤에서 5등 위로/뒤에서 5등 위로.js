function solution(num_list) {
    // 주어진 리스트를 오름차순으로 정렬.
    num_list.sort((a, b) => a - b);

    // 가장 작은 5개의 수를 제외한 나머지 수를 추출.
    const result = num_list.slice(5);

    return result;
}
function solution(num_list, n) {
    // n 번째 원소를 기준으로 나눔.
    const firstPart = num_list.slice(0, n);
    const secondPart = num_list.slice(n);

    // 두 리스트를 이어 붙여서 최종 결과 도출.
    const result = secondPart.concat(firstPart);

    return result;
}
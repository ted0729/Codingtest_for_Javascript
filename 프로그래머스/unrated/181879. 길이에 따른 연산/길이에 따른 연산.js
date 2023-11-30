function solution(num_list) {
    if (num_list.length > 10) {
        // 리스트의 길이가 11 이상인 경우, 모든 원소의 합 반환
        return num_list.reduce((acc, num) => acc + num, 0);
    } else {
        // 리스트의 길이가 10 이하인 경우, 모든 원소의 곱 반환
        return num_list.reduce((acc, num) => acc * num, 1);
    }
}

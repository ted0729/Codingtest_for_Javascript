function solution(n, slicer, num_list) {
    const [a, b, c] = slicer; // slicer 리스트에서 a, b, c 값을 추출

    switch (n) {
        case 1:
            // n = 1: num_list의 0번 인덱스부터 b번 인덱스까지
            return num_list.slice(0, b + 1);
        case 2:
            // n = 2: num_list의 a번 인덱스부터 마지막 인덱스까지
            return num_list.slice(a);
        case 3:
            // n = 3: num_list의 a번 인덱스부터 b번 인덱스까지
            return num_list.slice(a, b + 1);
        case 4:
            // n = 4: num_list의 a번 인덱스부터 b번 인덱스까지 c 간격으로
            return num_list.slice(a, b + 1).filter((_, index) => index % c === 0);
        default:
            // 이외의 경우는 주어지지 않았으므로 빈 배열 반환
            return [];
    }
}
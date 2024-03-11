function solution(numlist, n) {
    // numlist를 정렬 조건에 맞게 정렬
    numlist.sort((a, b) => {
        // a와 b의 n으로부터의 거리를 계산
        const distanceA = Math.abs(a - n);
        const distanceB = Math.abs(b - n);

        // 거리가 같을 경우, 더 큰 수를 앞에 배치
        if (distanceA === distanceB) {
            return b - a; // 내림차순 정렬
        }
        // 거리가 다를 경우, 더 가까운 순으로 정렬
        return distanceA - distanceB; // 오름차순 정렬
    });

    return numlist;
}

function solution(people, limit) {
    // 사람들을 몸무게에 따라 오름차순으로 정렬
    people.sort((a, b) => a - b);
    let answer = 0;
    let left = 0; // 가장 가벼운 사람의 인덱스
    let right = people.length - 1; // 가장 무거운 사람의 인덱스

    while (left <= right) {
        // 두 사람의 몸무게 합이 limit 이하인 경우 함께 탈 수 있음
        if (people[left] + people[right] <= limit) {
            left++; // 다음으로 가벼운 사람으로 이동
        }
        right--; // 무거운 사람은 항상 태우고 다음으로 무거운 사람으로 이동
        answer++; // 구명보트 수 증가
    }

    return answer;
}

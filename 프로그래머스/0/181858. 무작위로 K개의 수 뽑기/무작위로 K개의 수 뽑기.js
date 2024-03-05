function solution(arr, k) {
    let answer = [];
    let set = new Set(); // 중복을 제거하기 위해 Set 자료구조를 사용

    // arr 배열을 순회하며 중복되지 않는 수를 answer 배열에 추가
    for (let num of arr) {
        // 이미 k개를 선택했다면 반복을 중단
        if (answer.length === k) break;
        
        // num이 set에 없다면 (중복되지 않는다면) answer에 추가하고 set에도 추가
        if (!set.has(num)) {
            answer.push(num);
            set.add(num);
        }
    }

    // answer의 길이가 k보다 작다면 나머지를 -1로 채움
    while (answer.length < k) {
        answer.push(-1);
    }

    return answer;
}

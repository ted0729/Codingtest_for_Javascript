function solution(s) {
    // 문자열에서 숫자 집합 추출
    const tupleSets = s.slice(2, s.length - 2).split('},{')
        .map(set => set.split(',').map(Number));
    
    // 원소 수에 따라 집합 정렬
    tupleSets.sort((a, b) => a.length - b.length);
    
    const answer = [];
    const seen = new Set(); // 이미 추가된 숫자 관리
    
    // 집합을 순서대로 처리하면서 튜플 구성
    for (const set of tupleSets) {
        for (const num of set) {
            if (!seen.has(num)) {
                seen.add(num);
                answer.push(num);
                break; // 한 집합에서 하나의 숫자만 추가하면 됨
            }
        }
    }
    
    return answer;
}

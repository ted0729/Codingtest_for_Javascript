function solution(cards1, cards2, goal) {
    // 각 카드 뭉치의 현재 인덱스를 따라감.
    let idx1 = 0;
    let idx2 = 0;

    // 목표 단어 배열을 순회.
    for (let word of goal) {
        // 현재 단어가 cards1의 현재 인덱스에 있는 단어와 일치하는지 확인.
        if (idx1 < cards1.length && cards1[idx1] === word) {
            idx1++; // 일치한다면 cards1의 인덱스를 증가.
        }
        // 현재 단어가 cards2의 현재 인덱스에 있는 단어와 일치하는지 확인.
        else if (idx2 < cards2.length && cards2[idx2] === word) {
            idx2++; // 일치한다면 cards2의 인덱스를 증가.
        } else {
            // 만약 현재 단어가 어느 카드 뭉치에도 일치하지 않는다면,
            // 원하는 단어 배열을 만들 수 없다.
            return "No";
        }
    }

    // 모든 단어를 매칭할 수 있었다면 "Yes"를 반환.
    return "Yes";
}

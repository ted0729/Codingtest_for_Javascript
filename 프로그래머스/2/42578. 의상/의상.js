function solution(clothes) {
    // 옷을 종류별로 분류.
    const clothesMap = new Map();
    clothes.forEach(([name, type]) => {
        if (!clothesMap.has(type)) {
            clothesMap.set(type, 0);
        }
        clothesMap.set(type, clothesMap.get(type) + 1);
    });

    // 각 종류별 옷의 조합 수를 계산.
    let combinations = 1;
    clothesMap.forEach(count => {
        combinations *= (count + 1); // +1은 그 종류의 옷을 하나도 입지 않는 경우를 추가.
    });

    // 아무 옷도 입지 않는 경우를 제외.
    return combinations - 1;
}

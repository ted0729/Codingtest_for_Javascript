function solution(topping) {
    let answer = 0;
    const totalLength = topping.length;
    const leftTypes = new Map();
    const rightTypes = new Map();

    // 오른쪽 맵 초기화: 롤케이크 전체를 사용해서 각 토핑이 몇 번 등장하는지 세기
    for (let t of topping) {
        rightTypes.set(t, (rightTypes.get(t) || 0) + 1);
    }

    let leftUnique = 0;  // 왼쪽 토핑 종류 수
    let rightUnique = rightTypes.size;  // 오른쪽 토핑 종류 수

    // 롤케이크를 왼쪽에서 오른쪽으로 하나씩 나눠가면서 계산
    for (let i = 0; i < totalLength - 1; i++) {
        const currentTopping = topping[i];
        
        // 왼쪽 타입 맵에 현재 토핑 추가
        if (leftTypes.has(currentTopping)) {
            leftTypes.set(currentTopping, leftTypes.get(currentTopping) + 1);
        } else {
            leftTypes.set(currentTopping, 1);
            leftUnique++;  // 새로운 종류의 토핑이 왼쪽에 추가됨
        }

        // 오른쪽 타입 맵에서 현재 토핑 제거
        if (rightTypes.get(currentTopping) === 1) {
            rightTypes.delete(currentTopping);
            rightUnique--;  // 종류 하나가 오른쪽에서 사라짐
        } else {
            rightTypes.set(currentTopping, rightTypes.get(currentTopping) - 1);
        }
        
        // 왼쪽과 오른쪽의 토핑 종류 수가 같은지 확인
        if (leftUnique === rightUnique) {
            answer++;
        }
    }

    return answer;
}

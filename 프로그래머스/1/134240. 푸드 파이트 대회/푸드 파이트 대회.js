function solution(food) {
    const sequence = [];
    let left = '', right = '';

    // 각 음식에 대해 반복
    for (let i = 1; i < food.length; i++) {
        const half = Math.floor(food[i] / 2);
        left = left + i.toString().repeat(half);
        right = i.toString().repeat(half) + right;
    }

    // 중앙에 있는 물(0)을 추가
    const center = '0';

    // 결과 문자열을 생성
    const result = left + center + right;

    return result;
}

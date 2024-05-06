function solution(k, dungeons) {
    let maxCount = 0;  // 최대로 탐험할 수 있는 던전 수

    // 주어진 배열의 모든 순열을 생성하는 함수
    function permute(arr) {
        const result = [];
        const f = (prefix, array) => {
            if (array.length === 0) result.push(prefix);
            else {
                for (let i = 0; i < array.length; i++) {
                    const newPrefix = [...prefix, array[i]];
                    const newArray = array.filter((_, idx) => idx !== i);
                    f(newPrefix, newArray);
                }
            }
        };
        f([], arr);
        return result;
    }

    const permutations = permute(dungeons);

    // 모든 순열에 대하여 가능한 던전 탐험 수 계산
    permutations.forEach(dungeonOrder => {
        let fatigue = k;  // 초기 피로도
        let count = 0;
        for (let [minRequired, consume] of dungeonOrder) {
            if (fatigue >= minRequired) {
                fatigue -= consume;
                count++;
            } else {
                break;
            }
        }
        maxCount = Math.max(maxCount, count);
    });

    return maxCount;
}
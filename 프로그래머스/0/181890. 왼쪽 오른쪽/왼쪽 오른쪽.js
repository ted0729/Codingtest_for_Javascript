function solution(str_list) {
    let answer = [];

    // "l"과 "r"의 인덱스를 찾습니다. 없으면 -1을 반환
    const lIndex = str_list.indexOf("l");
    const rIndex = str_list.indexOf("r");

    // "l"과 "r" 모두 없는 경우 빈 리스트를 반환
    if (lIndex === -1 && rIndex === -1) {
        return answer;
    }

    // "l"만 있거나 "l"이 "r"보다 먼저 나오는 경우
    if (rIndex === -1 || (lIndex !== -1 && lIndex < rIndex)) {
        return str_list.slice(0, lIndex);
    }

    // "r"만 있거나 "r"이 "l"보다 먼저 나오는 경우
    if (lIndex === -1 || (rIndex !== -1 && rIndex < lIndex)) {
        return str_list.slice(rIndex + 1);
    }

    return answer;
}

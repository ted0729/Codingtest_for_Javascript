function solution(strArr) {
    // 문자열의 길이를 키로 하고, 해당 길이를 가진 문자열의 개수를 값으로 하는 객체를 생성
    const lengthCounts = {};

    // 문자열 배열을 순회하면서 길이별로 개수를 센다
    strArr.forEach(str => {
        const length = str.length;
        if (lengthCounts[length]) {
            lengthCounts[length] += 1;
        } else {
            lengthCounts[length] = 1;
        }
    });

    // 객체의 값 중 최대값을 찾는다
    answer = Math.max(...Object.values(lengthCounts));
    return answer;
}
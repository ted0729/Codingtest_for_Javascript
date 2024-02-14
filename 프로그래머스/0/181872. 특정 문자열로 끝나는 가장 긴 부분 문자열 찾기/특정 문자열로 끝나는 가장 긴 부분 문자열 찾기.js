function solution(myString, pat) {
    // pat가 마지막으로 등장하는 위치의 인덱스를 찾는다.
    const index = myString.lastIndexOf(pat);

    // 찾은 인덱스와 pat의 길이를 사용하여 가장 긴 부분 문자열을 잘라낸다.
    // pat의 길이를 더해주는 이유는 lastIndexOf가 pat의 시작 인덱스를 반환하기 때문.
    let answer = myString.substring(0, index + pat.length);

    return answer;
}
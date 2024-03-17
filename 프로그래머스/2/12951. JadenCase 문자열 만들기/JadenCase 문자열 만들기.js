function solution(s) {
    // 문자열을 공백을 기준으로 배열로 분리
    const words = s.split(" ");
    
    // 각 단어를 JadenCase로 변환
    const jadenCaseWords = words.map(word => {
        // 단어의 첫 문자를 대문자로, 나머지 문자를 소문자로 변환
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    
    // 변환된 단어들을 다시 공백으로 연결하여 반환
    return jadenCaseWords.join(" ");
}
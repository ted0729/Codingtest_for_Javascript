function solution(n, words) {
    let usedWords = new Set(); // 사용된 단어를 저장할 Set
    let lastChar = words[0][0]; // 첫 단어의 첫 문자로 시작해야 하므로 초기값 설정

    for (let i = 0; i < words.length; i++) {
        const word = words[i];

        // 단어의 첫 문자가 이전 단어의 마지막 문자와 다르거나, 이미 사용된 단어인 경우
        if(word[0] !== lastChar || usedWords.has(word)) {
            return [(i % n) + 1, Math.floor(i / n) + 1]; // 탈락자의 번호와 차례 반환
        }

        usedWords.add(word); // 사용된 단어 Set에 추가
        lastChar = word[word.length - 1]; // 다음 단어의 시작 문자를 현재 단어의 마지막 문자로 설정
    }

    return [0, 0]; // 탈락자가 없는 경우 [0, 0] 반환
}

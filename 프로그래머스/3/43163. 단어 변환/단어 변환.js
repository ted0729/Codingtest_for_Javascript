function solution(begin, target, words) {
    if (!words.includes(target)) return 0;

    let queue = [[begin, 0]];
    let visited = new Set();

    while (queue.length > 0) {
        let [currentWord, steps] = queue.shift();

        if (currentWord === target) {
            return steps;
        }

        words.forEach(word => {
            if (!visited.has(word) && canTransform(currentWord, word)) {
                visited.add(word);
                queue.push([word, steps + 1]);
            }
        });
    }

    return 0;
}

function canTransform(fromWord, toWord) {
    let diffCount = 0;
    for (let i = 0; i < fromWord.length; i++) {
        if (fromWord[i] !== toWord[i]) diffCount++;
        if (diffCount > 1) return false;
    }
    return diffCount === 1;
}

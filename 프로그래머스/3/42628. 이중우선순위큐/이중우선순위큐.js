function solution(operations) {
    let queue = [];

    for (let operation of operations) {
        const [command, value] = operation.split(" ");
        const num = parseInt(value);

        if (command === "I") {
            queue.push(num);
        } else if (command === "D") {
            if (queue.length === 0) continue;

            queue.sort((a, b) => a - b); // 오름차순 정렬

            if (num === 1) {
                queue.pop(); // 최댓값 삭제
            } else if (num === -1) {
                queue.shift(); // 최솟값 삭제
            }
        }
    }

    if (queue.length === 0) {
        return [0, 0];
    } else {
        queue.sort((a, b) => a - b);
        return [queue[queue.length - 1], queue[0]];
    }
}
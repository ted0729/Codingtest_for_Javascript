function solution(priorities, location) {
    let answer = 0;
    let queue = priorities.map((priority, index) => ({ priority, index }));
    
    while (queue.length > 0) {
        const currentProcess = queue.shift();
        const highestPriority = Math.max(...queue.map(process => process.priority));

        if (currentProcess.priority >= highestPriority) {
            answer++;
            if (currentProcess.index === location) break;
        } else {
            queue.push(currentProcess);
        }
    }
    
    return answer;
}

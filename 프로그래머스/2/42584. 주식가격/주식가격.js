function solution(prices) {
    let answer = new Array(prices.length).fill(0);
    let stack = [];

    for (let i = 0; i < prices.length; i++) {
        // 스택이 비어있지 않고, 현재 가격이 스택의 가장 위에 있는 가격보다 낮을 때
        while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
            let index = stack.pop();  // 스택에서 가격이 떨어진 시점의 인덱스를 가져옴.
            answer[index] = i - index; // 가격이 떨어지기 전까지 유지된 시간을 계산.
        }
        stack.push(i);  // 현재 가격의 인덱스를 스택에 저장
    }

    // 스택에 남아있는 인덱스는 가격이 끝까지 떨어지지 않은 인덱스
    while (stack.length > 0) {
        let index = stack.pop();
        answer[index] = prices.length - 1 - index; // 끝까지 가격이 유지된 시간을 계산
    }

    return answer;
}

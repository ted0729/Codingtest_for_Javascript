function solution(numbers) {
    let answer = new Array(numbers.length).fill(-1); // 결과 배열 초기화
    let stack = [];

    for (let i = 0; i < numbers.length; i++) {
        while (stack.length > 0 && numbers[stack[stack.length - 1]] < numbers[i]) {
            let index = stack.pop();
            answer[index] = numbers[i];
        }
        stack.push(i);
    }

    return answer;
}

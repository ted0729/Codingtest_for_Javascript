function solution(s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const bracket = s[i];

        if (bracket === '(') {
            stack.push(bracket); // 여는 괄호면 스택에 추가
        } else {
            // 닫는 괄호인 경우 스택이 비어있거나 가장 최근의 여는 괄호와 짝이 안 맞으면 올바르지 않은 괄호로 판단
            if (stack.length === 0 || stack.pop() !== '(') {
                return false;
            }
        }
    }

    // 문자열을 모두 확인한 후에도 스택에 남은 여는 괄호가 없으면 올바른 괄호로 판단
    return stack.length === 0;
}
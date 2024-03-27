function solution(s) {
    let stack = [];
    
    for (let char of s) {
        // 스택의 마지막 요소와 현재 문자가 동일한지 확인
        if (stack.length > 0 && stack[stack.length - 1] === char) {
            stack.pop(); // 스택에서 제거
        } else {
            stack.push(char); // 스택에 추가
        }
    }
    
    // 스택이 비어있다면 모든 문자를 제거한 것이므로 1 반환, 그렇지 않으면 0 반환
    return stack.length === 0 ? 1 : 0;
}

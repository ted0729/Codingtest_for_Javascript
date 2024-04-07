function solution(s) {
    let answer = 0;
    
    // 올바른 괄호 문자열인지 확인하는 함수
    const isValid = (str) => {
        const stack = [];
        const pairs = { ')': '(', ']': '[', '}': '{' };
        
        for (let char of str) {
            if (['(', '[', '{'].includes(char)) {
                stack.push(char);
            } else {
                if (stack.pop() !== pairs[char]) return false;
            }
        }
        
        return stack.length === 0;
    };
    
    // 문자열을 회전시키면서 확인
    for (let i = 0; i < s.length; i++) {
        if (isValid(s)) answer++;
        s = s.substring(1) + s[0];
    }
    
    return answer;
}

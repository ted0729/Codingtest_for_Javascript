function solution(x1, x2, x3, x4) {
    // 주어진 논리식에 따라 결과 계산
    let answer = (x1 || x2) && (x3 || x4);
    
    return answer;
}
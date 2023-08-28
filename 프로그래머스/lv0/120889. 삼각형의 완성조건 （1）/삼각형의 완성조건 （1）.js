function solution(sides) {
    var answer = 0;
    
    sides = sides.sort((a, b) => a - b)
    // sides의 배열 요소를 오름차순 !
    answer = sides[0] + sides[1] > sides[2] ? 1 : 2;
    // 오름차순으로인해 [0]부터 작은값 !
    return answer;

}
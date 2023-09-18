function solution(order) {
    var answer = 0;
    let newOrder = order.toString().split("");
    
    for (let i = 0 ; i < newOrder.length ; i++) {
        // 현재 숫자를 정수로 변환
        const currentNumber = parseInt(newOrder[i]);
        // 숫자가 3, 6, 9 중 하나인 경우
        if (currentNumber === 3 || currentNumber === 6 || currentNumber === 9) {
            // 해당 숫자의 개수만큼 박수를 추가
            answer++
        }
    }
    return answer;
}
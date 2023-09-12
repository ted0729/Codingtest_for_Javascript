function solution(numbers) {
    const answer = [];
    for(let i = 0 ; i < numbers.length; i++){
        for(let j = 0 ; j < numbers.length; j++){
            if(i !== j) {
                answer.push(numbers[i] * numbers[j])
            }
        }
    }
    return Math.max(...answer)
    // Math.max 함수는 배열 자체를 인수로 받지 않는다
    // 하지만 스프레드 연산자를 사용하면 배열의 요소를 개별적인 인수로 전달할 수 있다.
}
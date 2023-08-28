function solution(numbers) {
    let sum = 0; // 원소들의 합을 저장할 변수
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]; // 배열의 각 요소를 더해줌
    }
    const average = sum / numbers.length; // 평균 계산
    return average; // 평균값 반환
}
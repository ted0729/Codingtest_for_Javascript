function solution(number, limit, power) {
    let totalIron = 0;

    // 각 숫자의 약수의 개수를 구하는 함수
    function countDivisors(num) {
        let count = 0;
        for (let i = 1; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                if (i * i === num) { // 완전 제곱수의 경우 약수가 중복되므로 1번만 증가
                    count += 1;
                } else {
                    count += 2; // i와 num/i 두 개의 약수
                }
            }
        }
        return count;
    }

    // 1부터 number까지 각 숫자에 대해 약수의 개수를 구하고, 그에 따른 철의 무게를 계산
    for (let i = 1; i <= number; i++) {
        let divisorsCount = countDivisors(i);
        if (divisorsCount > limit) {
            // 약수의 개수가 limit을 초과하는 경우
            totalIron += power;
        } else {
            // 약수의 개수가 limit 이하인 경우
            totalIron += divisorsCount;
        }
    }

    return totalIron;
}

function solution(n) {
    let ans = 0;

    while (n > 0) {
        // n이 홀수인 경우, 점프를 사용. (건전지 사용량 +1)
        if (n % 2 === 1) {
            ans++;
            n -= 1; // 점프 후 거리
        }
        // 순간이동을 할 수 있는 경우엔 건전지 사용량은 증가안함.
        n /= 2;
    }

    return ans;
}

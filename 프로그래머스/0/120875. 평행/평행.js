function solution(dots) {
    // 두 점을 이은 직선의 기울기를 계산하는 함수
    const getSlope = (dot1, dot2) => {
        if (dot1[0] === dot2[0]) {
            return Infinity; // 기울기가 무한대인 경우
        }
        return (dot2[1] - dot1[1]) / (dot2[0] - dot1[0]);
    };

    // 두 직선이 평행한지를 판별하는 함수
    const isParallel = (slope1, slope2) => {
        return Math.abs(slope1 - slope2) < Number.EPSILON;
    };

    // 모든 가능한 직선의 조합을 확인하여 평행한 경우를 찾음
    for (let i = 0; i < 4; i++) {
        for (let j = i + 1; j < 4; j++) {
            for (let k = 0; k < 4; k++) {
                for (let l = k + 1; l < 4; l++) {
                    // 같은 점이면 건너뜀
                    if (i === k || i === l || j === k || j === l) {
                        continue;
                    }
                    const slope1 = getSlope(dots[i], dots[j]);
                    const slope2 = getSlope(dots[k], dots[l]);
                    if (isParallel(slope1, slope2)) {
                        return 1;
                    }
                }
            }
        }
    }

    return 0;
}
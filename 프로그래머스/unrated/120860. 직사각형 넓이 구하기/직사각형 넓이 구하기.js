function solution(dots) {
    let width = Math.abs(dots[0][0] - dots[1][0]);
    let height = Math.abs(dots[0][1] - dots[1][1]);

    if (width === 0) {
        width = Math.abs(dots[0][0] - dots[2][0]);
    }
    if (height === 0) {
        height = Math.abs(dots[0][1] - dots[2][1]);
    }

    let answer = width * height;
    return answer;
}

function solution(board) {
    const n = board.length;
    let dangerZone = new Array(n).fill().map(() => new Array(n).fill(false));

    // 주변 칸의 상대적 위치
    const directions = [
        [-1, -1], [-1, 0], [-1, 1], // 상단 3칸
        [0, -1], [0, 1],           // 좌우
        [1, -1], [1, 0], [1, 1]    // 하단 3칸
    ];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 1) { // 지뢰 발견
                // 자기 자신을 위험 지역으로 표시
                dangerZone[i][j] = true;

                // 주변 8칸을 위험 지역으로 표시
                for (let dir of directions) {
                    let x = i + dir[0];
                    let y = j + dir[1];
                    if (x >= 0 && x < n && y >= 0 && y < n) {
                        dangerZone[x][y] = true;
                    }
                }
            }
        }
    }

    // 안전지역 카운트
    let safeAreaCount = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (!dangerZone[i][j]) {
                safeAreaCount++;
            }
        }
    }
    // 머리깨지겠다 이번엔 맞겠지
    return safeAreaCount;
}

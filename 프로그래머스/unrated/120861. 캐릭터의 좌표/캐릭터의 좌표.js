function solution(keyinput, board) {
    let x = 0, y = 0;
    const xMax = Math.floor(board[0] / 2);
    const yMax = Math.floor(board[1] / 2);

    for (let key of keyinput) {
        switch (key) {
            case 'up':
                if (y < yMax) y++;
                break;
            case 'down':
                if (y > -yMax) y--;
                break;
            case 'left':
                if (x > -xMax) x--;
                break;
            case 'right':
                if (x < xMax) x++;
                break;
        }
    }

    return [x, y];
}

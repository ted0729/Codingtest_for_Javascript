function solution(num, total) {
    let answer = [];

    if (num === 1) {
        return [total];
    }

    let middle = Math.floor(total / num);
    let range, start, end;

    if (num % 2 === 0) {
        range = num / 2;
        start = middle - range;
        end = middle + range - 1;
    } else if (num % 2 !== 0) {
        range = Math.floor(num / 2);
        start = middle - range;
        end = middle + range;
    }

    while (start < end) {
        answer = [];
        for (let i = start; i <= end; i++) {
            answer.push(i);
        }

        let sum = answer.reduce((prev, cur) => prev + cur);
        if (sum === total) {
            break;
        }

        start++;
        end++;
    }

    return answer;
}

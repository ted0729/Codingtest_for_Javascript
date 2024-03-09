function solution(a, b, c, d) {
    // 숫자의 분포를 세기 위한 객체
    let count = {};
    [a, b, c, d].forEach(num => {
        count[num] = (count[num] || 0) + 1;
    });

    let keys = Object.keys(count).map(Number); // 숫자의 종류
    let values = Object.values(count); // 각 숫자가 나온 횟수

    // 네 주사위 숫자가 모두 같은 경우
    if (values.length === 1) {
        return 1111 * keys[0];
    }

    // 세 주사위 숫자가 같은 경우
    if (values.includes(3)) {
        let p = keys[values.indexOf(3)];
        let q = keys[values.indexOf(1)];
        return (10 * p + q) ** 2;
    }

    // 두 개의 주사위 숫자 쌍이 있는 경우
    if (values.length === 2 && values.every(val => val === 2)) {
        let [p, q] = keys;
        return (p + q) * Math.abs(p - q);
    }

    // 두 주사위 숫자가 같고 나머지 두 주사위 숫자가 서로 다른 경우
    if (values.includes(2)) {
        let [p, q, r] = keys.filter(key => count[key] === 1 || count[key] === 2);
        if (count[p] === 2) {
            return q * r;
        } else {
            return p * (count[q] === 2 ? r : q);
        }
    }

    // 네 주사위 숫자가 모두 다른 경우
    return Math.min(...keys);
}

function solution(my_string, queries) {
    // 문자열을 배열로 변환. 문자열은 변경 불가능(immutable)하므로 배열을 사용해 변경.
    let arr = my_string.split('');

    // 각 쿼리를 순회하며 지정된 범위의 문자열을 뒤집는다.
    queries.forEach(([s, e]) => {
        // 지정된 범위를 뒤집는다. slice로 부분 배열을 만들고 reverse로 뒤집은 후,
        // 다시 해당 위치에 할당.
        let part = arr.slice(s, e + 1).reverse();
        for (let i = s; i <= e; i++) {
            arr[i] = part[i - s];
        }
    });

    // 배열을 문자열로 합쳐서 반환.
    return arr.join('');
}

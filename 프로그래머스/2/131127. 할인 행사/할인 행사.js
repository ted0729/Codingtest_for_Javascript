function solution(want, number, discount) {
    let answer = 0;

    // 정현이가 원하는 제품과 수량을 객체로 변환.
    const wantObj = want.reduce((acc, cur, idx) => {
        acc[cur] = number[idx];
        return acc;
    }, {});

    // 10일 동안의 할인 제품을 순회하며 정현이가 원하는 제품과 수량을 만족하는지 확인.
    for (let i = 0; i <= discount.length - 10; i++) {
        // 현재 10일 동안의 할인 제품 목록을 객체로 변환.
        const discountObj = discount.slice(i, i + 10).reduce((acc, cur) => {
            acc[cur] = (acc[cur] || 0) + 1;
            return acc;
        }, {});

        // 정현이가 원하는 제품을 만족하는지 확인.
        const isSatisfied = want.every(product => {
            return discountObj[product] >= wantObj[product];
        });

        // 만족한다면 회원등록 날짜를 1 증가.
        if (isSatisfied) answer++;
    }

    return answer;
}

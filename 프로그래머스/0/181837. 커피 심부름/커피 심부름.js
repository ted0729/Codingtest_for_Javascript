function solution(order) {
    let answer = 0;
    const prices = {
        americano: 4500,
        cafelatte: 5000
    };

    order.forEach(item => {
        if (item.includes("americano") || item === "anything") {
            answer += prices.americano;
        } else if (item.includes("cafelatte")) {
            answer += prices.cafelatte;
        }
    });

    return answer;
}
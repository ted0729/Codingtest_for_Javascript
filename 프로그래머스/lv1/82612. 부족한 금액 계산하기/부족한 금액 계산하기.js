function solution(price, money, count) {
    var answer = 0;

    for(let i = 1; i <= count; i++) {
            answer += (price * i) // 3 + 6 + 9 + 12
        
    } 
    
    return (answer - money > 0) ? answer - money : 0;
}

// price 는 카운팅된 count 값이 곱해진다.. 그리고 모든 값은 더해진다..
// 내가 가진 money가 남는다면 0를, 부족하다면 부족한만큼을 출력시킨다..
// 부족하다면 price * count값 - money 를 return..
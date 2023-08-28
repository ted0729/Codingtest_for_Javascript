function solution(phone_number) {
    var answer = '';
    
    for(let i = 0; i < phone_number.length - 4 ; i++) {
        answer = answer + "*"
    }
        answer = answer + phone_number.slice(phone_number.length - 4); 
                                                 // 여기서 answer는 이미 끝에 4자리를 제외하곤 * 모양이다.
    return answer;                               // 그냥 -4만 써도 되는데 가독성이 난 이게 더좋다..
}

// 어렵다.....
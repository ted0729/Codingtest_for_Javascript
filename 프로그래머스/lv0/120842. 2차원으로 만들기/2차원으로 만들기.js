function solution(num_list, n) {
    var answer = [];
    
    while (num_list.length > 0) {
        // num_list의 첫번째 요소부터 n개까지 잘라서 배열로 만들어줘.
        // 예시1로 보자면 [[1,2],3,4,5,6,7,8] 로 만들어지면서 [1,2]가 new_list로 빠져나간다.
        let new_list = num_list.splice(0, n);
        answer.push(new_list);
    }
    
    return answer;
}
function solution(arr, divisor) { // divisor = 제수, 나누는 값
    var answer = [];
    
    for (let i = 0; i < arr.length; i++){
        if(arr[i] % divisor === 0 )
           answer.push(arr[i]);
        
    } if (answer.length === 0){ // -> 나누어 떨어지는 요소가 없으면 = return 배열에 요소가 없으면 !
           answer.push(-1);
    }
    answer.sort((a, b) => a -b);
    return answer;
}



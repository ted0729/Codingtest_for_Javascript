function solution(x) {  // x 가 10 이면
    var sum = 0;
    y = x.toString().split('');  // ['1', '0']
    
    for(let i = 0; i < y.length; i++) {
        sum = sum + parseInt(y[i]) // i=0 일 때 -> 1 
    } if (x % sum == 0) {          // i=1 일 떄 -> 0
        return true;
    } else {
        return false;
    }
    
    // return x % sum == 0 ? true : false; // 중괄호 밖으로 나와서 x값은 다시 기존의 정수값.
}
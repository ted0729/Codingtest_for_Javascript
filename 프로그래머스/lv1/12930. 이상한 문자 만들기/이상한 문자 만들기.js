function solution(s) {
    let answer = "";
    let arr = s.split(" "); // 공백이아닌 space를 기준으로 분리한다..
                            // 그럼 이렇게 분리된다 "try", "hello", "world"
    for(let i=0; i<arr.length; i++){ // i < 2
        // j는 문자에 영향을 직접 주는게아니고, 문자의 위치값을 알아내기 위해 쓴 변수선언이다..
        for(let j=0; j<arr[i].length; j++){ // i=0 -> try니까 인덱스 0,1,2 3개에 대한 j값이 반복을돌고
            if(j % 2 === 0){                // 짝수번째 글씨에 대문자 홀수번째 글씨에 소문자로 변경
                answer = answer + arr[i][j].toUpperCase();
            }else{
                answer = answer + arr[i][j].toLowerCase();
            }
        }
        if(i < arr.length - 1){
                answer = answer + " ";
            }
    }
    
    return answer;
}
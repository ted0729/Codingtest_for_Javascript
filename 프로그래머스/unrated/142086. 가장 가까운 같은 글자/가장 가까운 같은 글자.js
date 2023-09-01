function solution(s) {
    var answer = []; // 결과를 저장할 배열
    let newS = [];   // 이전에 나왔던 요소를 저장할 배열

    for (let i = 0; i < s.length; i++) {
        if (newS.includes(s[i])) { // newS 에 없는 요소라면 false다. 하지만 아래 false값이 된 값이 채워지면서 인덱스값을 얻게된다.
            // 이미 등장한 문자일 경우(newS 배열안의 요소와 겹치는 값이 들어올경우)
            answer.push(newS.length - newS.lastIndexOf(s[i])); // 현재 위치 - 마지막으로 등장한 위치 
                                                               // 현재 들어온 값의 length 값에 newS 배열안의 인덱스값을 빼는것.
            newS.push(s[i]); // 이전에(먼저) 나왔던 요소를 저장하는 배열에 추가
        } else {
            // 처음 등장하는 문자일 경우
            answer.push(-1); // -1을 결과 배열에 추가
            newS.push(s[i]); // 이전에(먼저) 나왔던 요소를 저장하는 배열에 추가
        }
    }

    return answer;
}


// s 문자열의 각 요소중 자신보다 앞쪽에있으며, 자신과 같은 수의 위치를 
// 자신를 기준으로 알아내는 문제. 없으면 -1을 출력 lastIndexOf, includes 사용
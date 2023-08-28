// function solution(num_list) {
//     var answer = [0, 0];

//     for (let i = 0; i < num_list.length; i++) {
//         if(num_list[i] % 2 === 0) {
//             answer[0]++;
//         } else {
//             answer[1]++;
//         }
//     }

//     return answer;
// }
function solution(num_list) {
    var answer = [0,0];
    // 짝수, 홀수 배열 저장소

    for(let a of num_list){
        // num_list에 있는 배열을 전부 a로 나타내기
        answer[a % 2] += 1
        // answer[a % 2] = answer[a % 2] + 1
        // answer[0] or answer[1] 값만 나올거고, +1 이 되니 a가 반복할때마다 그에 맞는 인덱스가 증가한다.
    }

    return answer;
}
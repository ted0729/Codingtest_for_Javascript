function solution(array, commands) {
  var answer = [];

  for (let i = 0; i < commands.length; i++) {
    let temp = [];
    temp = array.slice(commands[i][0] - 1, commands[i][1]); // -1을 해야 인덱스값을 얻을 수 있다 ㅇㅋ?
    temp.sort((a, b) => a - b)                              // slice 함수를 통해 얻는 괄호안의 값은 array의 인덱스값을 구해야하니까. 
    answer.push(temp[commands[i][2] - 1]); // i=0 -> temp[2], i=1 -> temp[2], i=2 -> temp[2]
  } // commands 는 인덱스 0~2까지만 값을 가지고있고,
    // 오름차순한뒤 인덱스 2번째값이 k번째 값을 나타내는거지.
  return answer;
}
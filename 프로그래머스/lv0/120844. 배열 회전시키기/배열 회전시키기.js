function solution(numbers, direction) {
  const length = numbers.length;
  const answer = [];

  if (direction === "right") {
   for (let i = 0; i < length; i++) {
      const newIndex = (i + 1) % length;
        // 현재 인덱스에서 1을 더한 후 배열 길이로 나눈 나머지를 새로운 인덱스로 사용
      answer[newIndex] = numbers[i];
    }
  } else if (direction === "left") {
    for (let i = 0; i < length; i++) {
      const newIndex = (i - 1 + length) % length;
    // 현재 인덱스에서 1을 뺀 후 음수가 되지 않도록 length를 더하고 배열 길이로 나눈 나머지를 새로운 인덱스로 사용
      answer[newIndex] = numbers[i];
    }
  }

  return answer;
}
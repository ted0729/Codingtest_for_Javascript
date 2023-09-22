function solution(n) {
  let i = 0; // 변수를 0으로 초기화. i는 팩토리얼을 계산할 때 사용할 값
  let factorial = 1; //factorial은 현재까지의 팩토리얼 값을 저장하는 변수

  // 팩토리얼 값이 n을 넘지 않는 최대의 i를 찾는다. 넘으면 while문을 빠져나간다.
  while (factorial <= n) {
    i++;
    factorial *= i; // factorial에 i를 곱하여 현재까지의 팩토리얼 값을 업데이트
  }
  // i-1을 반환
  // 왜냐하면 i가 팩토리얼 값이 n을 넘어가는 순간이기 때문에, 최대 팩토리얼 값인 i - 1을 반환 ㅇㅋ?
  return i - 1;
}
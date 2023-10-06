function solution(my_string) {
    const nums = my_string.match(/[0-9]+/g);
    return nums ? nums.map(num => Number(num)).reduce( (a, c) => a + c, 0) : 0; // reduce의 초기값 세팅 0을 하는게 뽀인트!
}
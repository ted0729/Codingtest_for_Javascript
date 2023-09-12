function solution(my_string) {
    const numbers = my_string.match(/\d/g); // 숫자만 추출하여 배열로 저장
    const sortNumbers = numbers.map(Number).sort(); // 숫자로 변환하고 오름차순 정렬
    return sortNumbers;
}


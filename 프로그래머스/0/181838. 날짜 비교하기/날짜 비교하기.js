function solution(date1, date2) {
    // date1과 date2를 Date 객체로 변환
    const d1 = new Date(date1[0], date1[1] - 1, date1[2]); // JavaScript의 월은 0부터 시작하므로 1을 빼준다
    const d2 = new Date(date2[0], date2[1] - 1, date2[2]);

    // date1이 date2보다 이르면 1을, 그렇지 않으면 0을 반환
    let answer = d1 < d2 ? 1 : 0;
    return answer;
}
function solution(a, b) {
    
    return new Date(2016, a-1, b).toString().slice(0,3).toUpperCase();

}
// new Date(year, month, day) 입력시
// "Tue May 24 2016 00:00:00 GMT+0000" 형식으로 출력.
// 브라우저 환경 또는 실행 환경에 따라 형식은 다를 수 있다.
// 하지만 대부분의 경우 기본적으로 toString() 메서드는 Date 객체를 문자열로 바꿔줄때
// 요일, 월, 일, 연도, 시간 및 기타 정보를 포함하는 특정 형식으로 나타낸다.
// 그리하여 toString으로 문자열로 바꿔준 뒤,
// slice로 인덱스 0부터 3의 앞까지 뽑아내면 "Tue"
// tuUpperCase 로 본문의 예시에서 원하는대로 대문자로 출력.

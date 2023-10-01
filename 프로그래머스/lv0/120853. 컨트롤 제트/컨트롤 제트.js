function solution(s) {
    s = s.split(" ")
    while(s.includes('Z')) { // Z가 더이상 없을때까지 반복
        s.splice(s.indexOf('Z')-1,2) // Z가 있다면 인전 인덱스의 요소와 같이 삭제
    }
    return s.reduce((a,b) => a+Number(b), 0) // b는 문자열이기때문에 Number로 숫자형으로 변환
}
function solution(s) {
    
    return s.split('').sort().reverse().join('') // 입출력 예시만을 따지면, sort()는 사용하지않아도 된다..
}

// split() 으로 하나씩 분리한뒤에,
// sort() 로 오름차순을 해준다. 대문자는 무조건 소문자 앞에온다(이점을 이용)
// reverse() 로 요소를 거꾸로 배열해준다.
// 그리고 join으로 공백없이 붙여준다.

// 알파벳은 sort((a, b) => b - a) 가 적용되지않고,
// 보통 sort().reverse() 로 사용하는게 효율이 좋다고한다.

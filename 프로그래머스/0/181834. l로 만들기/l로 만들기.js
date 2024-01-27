function solution(myString) {
    return myString
        .split('') // 문자열을 문자 단위로 나눈다.
        .map(char => char < 'l' ? 'l' : char) // 'l'보다 앞서는 문자를 'l'로 바꾼다.
        .join(''); // 배열을 문자열로 합친다.
}

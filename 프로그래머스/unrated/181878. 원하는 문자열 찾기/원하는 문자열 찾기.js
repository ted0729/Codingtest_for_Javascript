function solution(myString, pat) {
    // myString과 pat을 모두 소문자로 변환하여 비교.
    myString = myString.toLowerCase();
    pat = pat.toLowerCase();

    for (let i = 0; i <= myString.length - pat.length; i++) {
        // myString에서 i부터 i+pat.length까지의 부분 문자열을 추출.
        const subString = myString.substring(i, i + pat.length);
        
        // 추출한 부분 문자열과 pat이 같으면 1을 반환.
        if (subString === pat) {
            return 1;
        }
    }
    
    // myString을 모두 검사했는데도 pat이 없으면 0을 반환.
    return 0;
}
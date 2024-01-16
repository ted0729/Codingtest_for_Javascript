function solution(strArr) {
    return strArr.map((str, index) => {
        return index % 2 === 0 ? str.toLowerCase() : str.toUpperCase();
    });
}
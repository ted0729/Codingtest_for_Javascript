function solution(phone_book) {
    // 전화번호 목록 사전 순 정렬
    phone_book.sort();

    // 각 번호를 바로 다음 번호와 비교
    for (let i = 0; i < phone_book.length - 1; i++) {
        if (phone_book[i + 1].startsWith(phone_book[i])) {
            return false;
        }
    }
    return true;
}

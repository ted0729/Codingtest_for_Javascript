function solution(arr) {
    let stk = [];

    for (let i = 0; i < arr.length; i++) {
        // stk이 비어있지 않고 마지막 원소가 현재 arr[i]와 같다면, stk에서 마지막 원소를 제거
        if (stk.length > 0 && stk[stk.length - 1] === arr[i]) {
            stk.pop();
        } else {
            // 그렇지 않다면, arr[i]를 stk에 추가
            stk.push(arr[i]);
        }
    }

    // 마지막에 stk가 비어있다면 [-1]을, 그렇지 않다면 stk를 반환
    return stk.length === 0 ? [-1] : stk;
}
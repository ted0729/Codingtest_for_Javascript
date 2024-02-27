function solution(arr) {
    let stk = [];
    for (let i = 0; i < arr.length; ) {
        if (stk.length === 0 || stk[stk.length - 1] < arr[i]) {
            stk.push(arr[i++]);
        } else if (stk[stk.length - 1] >= arr[i]) {
            stk.pop();
        }
    }
    return stk;
}
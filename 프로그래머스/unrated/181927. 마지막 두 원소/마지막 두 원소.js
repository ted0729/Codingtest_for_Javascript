function solution(num_list) {
    let last = num_list[num_list.length - 1];
    let secondLast = num_list[num_list.length - 2];

    if (last > secondLast) {
        num_list.push(last - secondLast);
    } else {
        num_list.push(last * 2);
    }

    return num_list;
}

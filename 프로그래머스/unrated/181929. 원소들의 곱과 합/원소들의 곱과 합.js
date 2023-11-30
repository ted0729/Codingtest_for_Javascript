function solution(num_list) {
    let product = num_list.reduce((acc, val) => acc * val, 1);
    let sum = num_list.reduce((acc, val) => acc + val, 0);

    return product < sum ** 2 ? 1 : 0;
}
function solution(num_str) {
    return num_str.split('').reduce((sum, char) => sum + Number(char), 0);
}
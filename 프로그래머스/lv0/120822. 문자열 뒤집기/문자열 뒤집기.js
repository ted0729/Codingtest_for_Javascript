function solution(my_string) {
    var answer = '';
    
    const opposite = my_string.toString().split('').reverse().join('');
    
    return opposite;
}
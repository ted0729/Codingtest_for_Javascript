function solution(my_string, num1, num2) {
    var answer = '';
    let str1 = my_string[num1]
    let str2 = my_string[num2]
    let newString = my_string.split('')
    
    newString[num1] = str2
    newString[num2] = str1
        
    return newString.join('')
}
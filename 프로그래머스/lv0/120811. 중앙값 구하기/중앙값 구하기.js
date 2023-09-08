function solution(array) {
   
    const middleNumber = array.sort((a, b) => a - b)[Math.floor(array.length / 2)]
    
    return middleNumber;
}
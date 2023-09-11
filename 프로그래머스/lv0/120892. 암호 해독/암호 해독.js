function solution(cipher, code) {
    var result = '';
    const newCipher = cipher.toString().split('');
    
    for(let i = 0; i < newCipher.length; i++){
        if((i + 1) % code === 0){
            result += newCipher[i];
        }
    }
    return result;
}
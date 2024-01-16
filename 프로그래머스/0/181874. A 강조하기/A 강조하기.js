function solution(myString) {
    return myString.split('').map(char => {
        if (char === 'a') return 'A';
        else if (char === char.toUpperCase() && char !== 'A') return char.toLowerCase();
        else return char;
    }).join('');
}

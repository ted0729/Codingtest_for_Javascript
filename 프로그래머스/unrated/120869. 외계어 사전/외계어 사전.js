function solution(spell, dic) {
    const arr = [];
    
    for(let i = 0; i < dic.length; i++) {
        const secArr = [];
        for(let j = 0; j < spell.length; j++) {
            secArr.push(dic[i].includes(spell[j]));
        }
        arr.push(secArr);
    }
 
    return arr.some(secArr => secArr.every(Boolean)) ? 1 : 2;
}
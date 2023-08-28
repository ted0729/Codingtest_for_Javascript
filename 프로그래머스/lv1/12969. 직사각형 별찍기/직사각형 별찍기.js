process.stdin.setEncoding('utf8');
process.stdin.on('data', data => { // 5, 3 이 입력되었다
    const n = data.split(" "); // "5" "3" 으로 분리했다.
    const a = Number(n[0]), b = Number(n[1]); // a는 5, b는 3이 되었다. 
                                              // 예시를 통해서 a는 별의 갯수, b는 몇줄을 의미하는건지 알게되었다
    
    for(let i = 1; i <= b; i++){ // 몇줄인지 먼저 설정하고, 제한조건으로인해 초기값은 1부터다
        let star = "";  // 공백값의 변수를 선언
    for(let j = 1; j <= a; j++){ // 별이 몇개인지 설정하고, 제한조건으로인해 초기값은 1부터다
        star = star + "*" 
        }
        console.log(star); 
    }
        
});

// row 랑 column 을 써야하는 문젠가..?
// n값은 가로줄.. m값은 세로줄..

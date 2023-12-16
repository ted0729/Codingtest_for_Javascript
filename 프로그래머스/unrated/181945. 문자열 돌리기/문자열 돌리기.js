const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    const str = line;
    for (let i = 0; i < str.length; i++) {
        console.log(str[i]);
    }
}).on('close', function () {
    process.exit();
});

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    const input = line.split(' ').map(Number);
    const a = input[0];
    const b = input[1];
    const c = a + b;
    console.log(`${a} + ${b} = ${c}`);
}).on('close', function () {
    process.exit();
});

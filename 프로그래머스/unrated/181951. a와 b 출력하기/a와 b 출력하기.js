const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    const input = line.split(' ').map(Number);
    console.log('a = ' + input[0]);
    console.log('b = ' + input[1]);
}).on('close', function () {
    process.exit();
});

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function () {
    console.log('!@#$%^&*(\\\'"<>?:;');
}).on('close', function () {
    process.exit();
});

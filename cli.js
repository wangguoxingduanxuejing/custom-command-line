#!/usr/bin/env node

console.log("hello world my cli");
console.log("最简单的命令行demo wgx504692431 欢迎一起探讨");
function run(argv) {
    if (argv[0] === '-v' || argv[0] === '--version') {
        console.log('version is 1.0.0');
    }
    else if (argv[0] === '-h' || argv[0] === '--help') {
        console.log('usage:\n');
        console.log('-v --version [show version]')
    }
}

run(process.argv.slice(2));
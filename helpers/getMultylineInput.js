const readline = require('readline');

// helper, required to read multiline input in node.js

const getInput = (cb) => {
  const input = [];

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.prompt();

  rl.on('line', function (cmd) {
    input.push(cmd);
  });

  rl.on('close', function (cmd) {
    const line1 = input[0].split(' ');
    const line2 = input[1].split(' ').map(el => +el);

    cb(+line1[0], +line1[1], line2);
    process.exit(0);
  });

  return input;
};

export default getInput;
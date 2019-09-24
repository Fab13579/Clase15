const {exec} = require ('child_process');

// 1
const command = 'git branch';
const handle = (err, stdout, stderr) => {
    console.log(stdout);
};
exec (command,handle);
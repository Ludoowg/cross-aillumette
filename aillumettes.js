const { exec } = require('child_process');
const gameLoop = require('./src/loop')

const args = process.argv.slice(2);

if (args[0] === '--gui') {
  const child = exec('npm run electron-react');
} else {
  gameLoop()
}
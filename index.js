import fs from 'fs';
import { readdir } from 'node:fs/promises';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
// import { stdin , stdout } from 'node:process';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const showDirectory = async () => {
  try {
    const files = await readdir(__dirname);
    console.table(files);
  } catch (err) {
    console.error(err);
  }
}

await showDirectory();

const getUserName = () => {
  const args = process.argv.slice(2);
  let userName = 'unknown_user';
  args.forEach(arg => {
    if (arg.startsWith('--username')) {
      userName = arg.split('=')[1];
    }
  });
  return userName;
}

const USER_NAME = getUserName();

const start = async () => {

  console.log(`Welcome to the File Manager, ${USER_NAME}!`);

  const rl = readline.createInterface({
    input,
    output,
    terminal: false
  });
  rl.on('line', (line) => {
    const currentDir = `/User/${USER_NAME}`;
    if (line === ".exit") {
      console.log(`Thank you for using File Manager, ${USER_NAME}, goodbye!`);
      rl.close();
    }

    if (line.startsWith('cd ')) {

    };
    console.log(`You are currently in ${currentDir}`)

  });

}

start();

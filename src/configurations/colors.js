const chalk = require('chalk');

const success = (text) => chalk.green(text);
const error = (text) => chalk.red(text);
const warn = (text) => chalk.yellow(text);
const info = (text) => chalk.cyan(text);
export const colorSettings = {
  success,
  error,
  warn,
  info,
};

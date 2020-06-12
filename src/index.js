const program = require('commander');
const { version } = require('../package.json');

import Run from './cli';

program
  .version(version)
  .name('readme-generator')
  .option('-E, --entry <file>', 'specify the entry file')
  .option('-O, --output <file>', 'specify the output file')
  .option('-T, --template <path>', 'specity a custom template')
  .option('-D, --debug', 'log output readme data');

program.parse(process.argv);

Run(program);

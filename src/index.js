const program = require('commander');

import Run from './cli';

program
  .version('0.0.1')
  .name('readme-generator')
  .option('-e, --entry <file>', 'specify the entry file')
  .option('-o, --output <file>', 'specify the output file')
  .option('-t, --template <path>', 'specity a custom template')
  .option('-d, --debug', 'log output readme data');

program.parse(process.argv);

Run(program);

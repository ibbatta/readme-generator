const yargs = require('yargs');

import { configFile, configOptions } from './configurations';
import RunGenerator from './cli';

const argv = yargs
  .version()
  .scriptName('readme-generator')
  .usage('$0 <cmd> [args]')
  .pkgConf('readme-generator')
  .config(configFile)
  .options(configOptions)
  .epilog(`Copyright © Maurizio Battaghini ${new Date().getFullYear()}`)
  .help().argv;

RunGenerator(argv);

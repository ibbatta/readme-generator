const yargs = require('yargs');
const { version } = require('../package.json');
import { configFile, configOptions } from './configurations';
import RunGenerator from './cli';

const argv = yargs
  .version(version)
  .pkgConf('readme-generator')
  .config(configFile)
  // TODO: aggiungere tutti i file di coerce per ENTRY, OUTPUT e TEMPLATE
  .options(configOptions).argv;

RunGenerator(argv);

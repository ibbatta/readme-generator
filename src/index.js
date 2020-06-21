const yargs = require('yargs');
const ora = require('ora');
const { version } = require('../package.json');

import { configFile, configOptions, configSpinner } from './configurations';
import RunGenerator from './cli';

const readmeSpinner = ora(configSpinner);

const argv = yargs
  .version(version)
  .pkgConf('readme-generator')
  .config(configFile)
  // TODO: aggiungere tutti i file di coerce per ENTRY, OUTPUT e TEMPLATE
  .options(configOptions).argv;

readmeSpinner.start('Loading...');
RunGenerator(argv, readmeSpinner);

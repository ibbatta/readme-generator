const fs = require('fs');
const findUp = require('find-up');

const configPath = findUp.sync(['.readmerc', 'readme.config.json']);

export const configFile = configPath
  ? JSON.parse(fs.readFileSync(configPath))
  : {};

export const configOptions = {
  entry: {
    alias: 'E',
    describe: 'specify the entry file',
    demandOption: false,
    default: 'package.json',
    type: 'string',
  },
  output: {
    alias: 'O',
    describe: 'specify the output file',
    demandOption: false,
    default: 'README.md',
    type: 'string',
  },
  template: {
    alias: 'T',
    describe: 'specify the path for you own README template',
    demandOption: false,
    default: './readme/template/README.md',
    type: 'string',
  },
  debug: {
    alias: 'D',
    describe: 'log output readme data',
    demandOption: false,
    default: false,
    type: 'boolean',
  },
  yes: {
    alias: 'Y',
    describe: 'accept all default values',
    demandOption: false,
    default: false,
    type: 'boolean',
  },
};

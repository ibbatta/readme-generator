const fs = require('fs');
const findUp = require('find-up');

const configPath = findUp.sync(['.readmerc', 'readme.config.json']);

export const configFile = configPath
  ? JSON.parse(fs.readFileSync(configPath))
  : {};

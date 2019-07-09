import chalk from 'chalk';
import figlet from 'figlet';
import inquirer from 'inquirer';

import config from './config';
import { collectionUtils, fileUtils } from './utilities';

const packageJsonQuestion = () => {
  const firstQuestion = [
    {
      name: 'autocompleteWithPackageJsonData',
      type: 'input',
      message:
        'I see you have a package.json, would you like to autocomplete some info?'
    }
  ];
  console.log(chalk.blueBright('First settings:'));
  return inquirer.prompt(firstQuestion);
};

const run = async () => {
  console.log(chalk.green(figlet.textSync('Readme\nGenerator')));

  const packageJsonExist = await fileUtils.accessFilePromise(
    config.packageJsonFile
  );
  const packageJsonData = await fileUtils.readFilePromise(
    config.packageJsonFile
  );

  if (packageJsonExist) {
    console.log(
      collectionUtils.filterCollectionByCostantValues(packageJsonData)
    );
  }
};

run();

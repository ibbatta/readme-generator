#!/usr/bin/env node

import Chalk from 'chalk';
import Boxen from 'boxen';
import Figlet from 'figlet';
import Inquirer from 'inquirer';

import config from './config';
import { fileSettings } from './settings';
import { collectionUtils, fileUtils } from './utilities';
import {
  promptQuestions,
  packageQuestions,
  readmeQuestions
} from './questions';

let packageAnswers, readmeAnswers;

const promptFnQuestions = () => {
  console.log(
    Chalk.blueBright('Intelligent autocomplete with package.json informations')
  );
  return Inquirer.prompt(promptQuestions);
};

const packageFnQuestions = () => {
  console.log(Chalk.blueBright('General questions'));
  return Inquirer.prompt(packageQuestions);
};

const readmeFnQuestions = () => {
  console.log(Chalk.blueBright('Extra questions'));
  return Inquirer.prompt(readmeQuestions);
};

const run = async () => {
  console.log(Chalk.green(Figlet.textSync('Readme\nGenerator')));

  const packageJsonExist = await fileUtils.accessFilePromise(
    config.packageJsonFile
  );
  const packageJsonData = await fileUtils.readFilePromise(
    config.packageJsonFile
  );

  const readmeMdTemplate = await fileUtils.readFilePromise(
    config.readmeMdTemplate
  );

  const packageJsonStorage = packageJsonExist
    ? collectionUtils.filterCollectionByCostantValues(packageJsonData)
    : null;

  const isAutocompleteRequested = await promptFnQuestions();

  if (isAutocompleteRequested.usePackageJsonData) {
    packageAnswers = packageJsonStorage;
  } else {
    packageAnswers = await packageFnQuestions();
  }
  readmeAnswers = await readmeFnQuestions();

  const templateConverted = fileUtils.convertHandlebarTemplate(
    readmeMdTemplate,
    packageAnswers,
    readmeAnswers
  );

  try {
    await fileUtils.writeFilePromise(config.readmeMdFile, templateConverted);
    console.log(
      Chalk.green(
        Boxen(
          `${Chalk.yellowBright.bold(
            fileSettings.readme.name
          )} generated with success`,
          {
            padding: 1,
            margin: 1,
            borderStyle: 'classic'
          }
        )
      )
    );
  } catch (error) {
    console.error(Chalk.red(error));
  }
};

run();
